import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Initialize MCP client for n8n
async function initializeMCPClient() {
  const client = new Client({
    name: 'trueflow-chat',
    version: '1.0.0',
  });

  // Connect to n8n MCP server
  const transport = new StdioClientTransport({
    command: 'curl',
    args: [
      '-X',
      'POST',
      '-H',
      'Content-Type: application/json',
      '-H',
      `Authorization: Bearer ${process.env.N8N_MCP_TOKEN}`,
      `${process.env.N8N_MCP_URL || 'http://localhost:5678/mcp-server/http'}`,
    ],
  });

  await client.connect(transport);
  return client;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Initialize MCP client
    const mcpClient = await initializeMCPClient();

    // Get available tools from n8n
    const { tools } = await mcpClient.listTools();

    // Convert MCP tools to Anthropic format
    const anthropicTools = tools.map((tool: any) => ({
      name: tool.name,
      description: tool.description || 'n8n workflow tool',
      input_schema: tool.inputSchema || {
        type: 'object',
        properties: {},
        required: [],
      },
    }));

    // Build messages array
    const messages = [
      ...conversationHistory,
      {
        role: 'user',
        content: message,
      },
    ];

    // Call Claude with MCP tools
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: `You are a business intelligence assistant for TrueFlow. You help users understand their business metrics and data from GoHighLevel.

When users ask about their business, use the available n8n workflow tools to fetch real-time data.

Available workflows:
- Business Health Report: Generates comprehensive metrics including contacts, opportunities, conversations, and KPIs

Be conversational, helpful, and provide insights based on the data you retrieve.`,
      messages,
      tools: anthropicTools,
    });

    // Handle tool use
    let finalResponse = response;
    const toolResults: any[] = [];

    if (response.stop_reason === 'tool_use') {
      for (const contentBlock of response.content) {
        if (contentBlock.type === 'tool_use') {
          // Execute the tool via MCP
          const result = await mcpClient.callTool({
            name: contentBlock.name,
            arguments: contentBlock.input,
          });

          toolResults.push({
            type: 'tool_result',
            tool_use_id: contentBlock.id,
            content: JSON.stringify(result),
          });
        }
      }

      // Continue conversation with tool results
      if (toolResults.length > 0) {
        finalResponse = await anthropic.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4096,
          messages: [
            ...messages,
            {
              role: 'assistant',
              content: response.content,
            },
            {
              role: 'user',
              content: toolResults,
            },
          ],
        });
      }
    }

    // Extract text response
    const textContent = finalResponse.content.find(
      (block: any) => block.type === 'text'
    );

    await mcpClient.close();

    return NextResponse.json({
      response: textContent?.text || 'I encountered an issue processing your request.',
      conversationHistory: [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: textContent?.text || '' },
      ],
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process message' },
      { status: 500 }
    );
  }
}
