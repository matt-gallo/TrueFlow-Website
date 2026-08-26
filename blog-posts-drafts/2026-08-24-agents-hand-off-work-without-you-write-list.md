---
title: "Agents Can Now Hand Work to Each Other Without Asking You. Nobody Wrote Down What They May Change."
date: 2026-08-24
author: "TrueFlow AI"
description: "On August 17 Google's Agent2Agent protocol moved in alongside Anthropic's MCP under one Linux Foundation roof. The spec's own phrase for the feature is 'without a human brokering the handoff.' Here's the Write List — twenty minutes to find what every connection into your business is allowed to change."
hook_category: "trend / this just changed"
---

On August 17, 2026, Google's Agent2Agent protocol moved to the Agentic AI Foundation, the Linux Foundation body that already governs Anthropic's Model Context Protocol. Axios had it first. AAIF says it has gone from fewer than 40 members at its December 2025 launch to more than 250, including Google, Microsoft, Amazon, Anthropic, OpenAI, Shopify and Block.

Two protocols, one roof. MCP is how an agent reaches your tools. A2A is how one agent hands work to another.

## What Just Changed (In English)

Read AAIF's own description of the mechanism. An agent publishes an agent card — a structured description of what it can do and how to reach it. Other agents read that card, discover the capability, and delegate the task.

The phrase in their post is "without a human brokering the handoff." That is the feature, stated plainly, and it is also the whole story.

Until now, connecting two systems in your business required somebody to decide they should be connected. Somebody clicked authorize. That person was a bottleneck, and incidentally a review step. The standard that just got a permanent home removes the bottleneck. It does not replace the review, because the review was never a product. It was a side effect of the work being annoying.

## The People Building This Already Separated the Two Questions

Watch what happens where money enters. Google Cloud and PayPal are extending A2A into commerce through a second protocol, AP2, which exists to handle payment authorization. Agents talk over A2A; a different layer decides whether a purchase is allowed. Huawei's OS assistant and Tencent's WeChat run assistant-initiated calls and messages under what AAIF describes as dual authorization.

A2A v1.0, shipped March 2026, added cryptographically signed agent cards. Identity verification, written into the specification, because "which agent is this" turned out to matter.

Nobody building this treats delegation and permission as the same question. That care stops at the edge of the standard. Inside a nine-person business, the equivalent question has no owner.

## The Part That's Ours

On August 17 our own publisher rewrote the featured image on 46 blog posts in one run. We wrote about undoing it. What we did not write is why it could reach 46 records at all.

Nothing about that job required write access to 46 posts. It needed write access to one. The credential it ran under simply had more reach than the job did, because nobody had ever sat down and matched the two. That is not an agent problem. It is a permission that was set once and never read again, and it is in every stack we have audited.

## The Write List

Twenty minutes, one page.

List every connection into your business that can change a record without a person present. Integrations, Zaps, webhooks, scheduled jobs, assistants with tool access, an agency's API key. Then three columns.

1. **What it can read.** Usually everything. Note it and move on.
2. **What it can change.** Be specific. Not "contacts" — which field. Not "invoices" — create, edit, or void.
3. **What it should be able to change**, based on the job you installed it to do.

**The Write List** is finished when columns two and three match on every row.

They will not match. Column two was set at install by clicking through a scope screen that asked for everything at once, and column three has never been written down anywhere. The distance between them is the surface an agent-to-agent handoff inherits — not because agents are reckless, but because a delegated task runs with whatever the delegator was already holding.

If twenty minutes is too many, sort by what a wrong write costs. A connection that can edit a phone number is a bad afternoon. A connection that can void an invoice or send from your domain is a different category.

## What You Should Be Asking Right Now

Which connection in your business has the widest write access, and what job did you install it to do?

If something you never authorized asked that connection to act today, would anything in your stack refuse?

## Takeaway

Interoperability arrived as a standard. Permission arrived as your problem.

*If you'd like help scoping what each connection into your business is allowed to change, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Sources: Axios, "Exclusive: Google-backed agentic A2A protocol gets a new home," August 17, 2026; Agentic AI Foundation, "A2A joins AAIF's open agentic stack," August 17, 2026; Linux Foundation press release announcing the AAIF, December 9, 2025; TrueFlow site repository commit history, August 17, 2026.*
