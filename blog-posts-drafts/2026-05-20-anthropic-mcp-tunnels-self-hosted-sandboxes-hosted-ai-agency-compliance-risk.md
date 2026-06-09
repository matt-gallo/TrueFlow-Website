---
title: "Anthropic Just Shipped Private MCP Tunnels and Self-Hosted Sandboxes. The 'We Host Your AI' Agency Is Now a Compliance Risk."
date: 2026-05-20
author: "TrueFlow AI"
description: "On May 19, Anthropic put Claude Managed Agents inside your firewall — MCP tunnels and self-hosted sandboxes. Here's why the central 'AI control plane' agency model just got an expiration date, and what TrueFlow has been building inside client perimeters all along."
---

On May 19, Anthropic added two features to Claude Managed Agents that most AI agencies will pretend not to see: **MCP tunnels** and **self-hosted sandboxes**. In English — Claude agents can now run inside your firewall, talking to MCP servers on your private network, without anything routing through a shared vendor-hosted control plane.

That single release reshapes what "AI infrastructure" is allowed to look like in 2026.

## What Just Changed (In English)

For about six months, the default AI agency build has looked like this. You sign up. You hand over a few API keys. The agency spins up an "AI control plane" on *its own* infrastructure — usually a hosted MCP server with your business name in the URL, sitting on the public internet, holding tokens to your CRM, inbox, Stripe, and calendar. You get a slick portal. They get the keys to your business.

Anthropic just signaled that's not the architecture enterprise will tolerate anymore. **Self-hosted sandboxes** let an organization run the agent's compute, file access, and integrations inside its own perimeter, under its own audit logging. **MCP tunnels** let an agent reach an MCP server on a private network without ever exposing that endpoint to the public internet. Public beta on sandboxes, research preview on tunnels. The direction of travel is obvious.

## The Trend Nobody's Saying Out Loud

Stack this against the last two weeks. On May 14, Anthropic split Agent SDK billing off the $200 Claude Pro/Max plans. On May 16, they shipped Dreaming for agents. Now this. Three releases, one pattern — Anthropic is rebuilding the Claude stack around enterprise-grade isolation and metered usage. The "shared control plane" model a lot of AI agencies still sell is the *exact opposite* of that direction.

Here's the kicker — even if your current agency says "you don't need that, you're not enterprise," you don't make that call alone anymore. Your insurance carrier, your auditor, and your bank all do. The moment one of them writes *"where does your AI live and who holds your tokens?"* into a renewal form, the hosted-control-plane agency becomes a renewal risk you bought yourself.

## What TrueFlow Is Actually Doing Differently

We don't host your AI. We build it inside the perimeter you already own.

1. **Every agent lives inside your GHL subaccount.** Conversation AI, Voice AI, Workflows — they run on HighLevel's infrastructure, scoped to your locationId, using your PIT token. We don't spin up a "TrueFlow control plane" that holds the keys to your business. If you fire us tomorrow, the agent stays in your account and keeps running. Most agencies can't say that out loud.

2. **Our MCP server is subaccount-scoped, not multi-tenant.** This past week we shipped a refactor of our 73-tool GHL MCP server. Every tool call now takes a required `subaccount` parameter — your build only ever sees your subaccount. There is no shared pool, no cross-tenant blast radius, no "oops we leaked the wrong contacts" headline waiting to happen.

3. **No middleware on a public URL.** When a build needs orchestration outside HighLevel, we use n8n or workflow nodes inside your account — not a TrueFlow-branded webhook proxy sitting on the open internet. The moment Anthropic's MCP tunnels go GA, we'll route through them. Until then, no keys parked in public DNS.

4. **Pricing is outcome-based, not access-based.** We don't charge to *host* an agent. We charge when it books a call, recovers a missed lead, or saves a renewal. The build is free for three days. You don't pay until you see traction.

## What You Should Be Asking Right Now

- *If we walk away from our current AI agency tomorrow, do our agents keep running — and where, exactly, do they live?*
- *Is the MCP server holding our tokens on a private network, or behind one API key on the open internet?*

If either answer is fuzzy, that's not an "AI build." That's a vendor lock-in story dressed up in a Notion doc.

## Final Takeaway

The "we host your AI" agency was a smart 2024 model. In 2026, it's a compliance event waiting to happen. Anthropic just made the standard explicit: agents belong inside the perimeter that owns the data. If yours don't, you don't have an AI strategy — you have an insurance problem with a monthly invoice attached.

**Want this built for you in just 3 days—for free—and you don't pay until you see traction? DM 'FLOW' or [click here](https://trueflow.ai) to see if you qualify.**

*Sources: 9to5Mac and Testing Catalog coverage of Anthropic's MCP tunnels and self-hosted sandboxes for Managed Agents (May 19, 2026); Anthropic's May 14 Agent SDK billing split.*
