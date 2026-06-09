---
title: "GHL Just Put AI Behind the Wait Action. Your 'Nurture Cadence Audit' Is Now a Sentence."
date: 2026-05-23
author: "TrueFlow AI"
description: "GoHighLevel's Wait action got an AI-powered redesign with recurring schedules and natural-language setup — the same week Anthropic shipped 'outcomes' as a first-class agent primitive. Configuration is no longer billable. Outcomes are."
---

GoHighLevel rebuilt the **Wait action** this month and the change is bigger than the changelog headline suggests. The old dropdown is gone. There is now a card-based intent picker ("What should the contact wait for?"), native recurring schedules (weekly, monthly, yearly — with specific days and times), and a "Wait AI" CTA that lets you type *"hold this lead until 9am Tuesday after their first reply, then escalate"* and get back a configured Wait card. Date-based waits — which used to require two stitched actions — collapsed into a single step.

If you have ever paid an agency for a "follow-up cadence audit," that line item just got auto-generated.

## What Just Changed (In English)

For most of GHL's history, nurture cadence was *the* part of an automation build agencies billed against. Pick the right wait windows. Decide between business-hours and absolute-time delays. Build the reply branches. Wire in the timeout fallbacks. Enough small decisions to plausibly bill a thousand dollars for a "drip campaign architecture" call.

Wait AI just took the architecture call and turned it into one sentence inside the workflow builder. *"Wait 24 hours after form submit, retry every Tuesday at 9am until they reply, escalate to voicemail at the 5-day mark."* That's the cadence. That used to be a deck.

The recurring schedule piece is the part most agencies will under-appreciate. Annual renewals, holiday reactivations, weekly check-ins — those used to require external scheduling tools or a chain of Set Event Date → Wait actions glued together. Now it's a single card inside the workflow you already had open.

## The Trend Nobody's Saying Out Loud

This isn't a one-platform story. At **Code w/ Claude on May 22**, Anthropic shipped **outcomes** as a first-class primitive inside the Claude Agent SDK — you specify a desired result and the agent runs in a loop until that outcome is reached, no human in the middle asking "are we done yet?" They also added managed-agent webhooks and a coordinator-spawns-subagents orchestration primitive.

Two platforms, one week, one direction: **the configuration layer is being deleted.** You describe the outcome. The system builds the cadence, picks the wait windows, retries on failure, calls the sub-agent, fires the webhook when the work is done.

Configuration was 60% of what most automation agencies billed for. That work just collapsed.

## What TrueFlow Is Actually Doing Differently

We rebuilt how we scope around this. Concretely:

1. **We deleted "cadence architecture" as a separate deliverable.** Nurture timing lives inside the build conversation now, not inside a 40-slide Notion doc you're charged to read. If Wait AI can turn a sentence into a working card, we will not bill you to write that sentence ourselves over four meetings.

2. **We use GHL's recurring Wait natively for renewals and check-ins.** No more Zapier scheduled triggers gluing a calendar tool to a workflow. The Wait action does it inside the CRM. Every external dependency we cut is one less thing your team has to renew, audit, or watch break on a Sunday.

3. **We define the outcome, not the steps.** Mirroring the Anthropic SDK shift, our builds start with a single line — *"qualified booked call on the calendar"* — and the cadence is whatever loops we have to wire to get there. If the loops change next month because the data says so, that is inside the engagement, not a change order.

4. **No retainers on configuration work.** If the platform just made the work disappear, we will not invoice you to do it slower. We charge against the outcome (booked calls, recovered carts, closed-loop replies). Built in 3 days, free until you see traction.

## What You Should Be Asking Right Now

- *If GHL's Wait action now takes natural-language input, why is my provider quoting a "drip cadence build" as a separate paid phase?*
- *If Claude can run an agent in a loop until an outcome is met, why am I still buying a flat-fee retainer for "ongoing optimization" that never gets measured against any outcome at all?*

If you ask those out loud and your provider gets defensive instead of crisp, you have your answer.

## Final Takeaway

Cadence used to be craft. This week it became a sentence. The agencies that survive 2026 are the ones who repriced when the configuration layer collapsed — not the ones still selling a slide deck about wait windows. Pick the side that matches where the product is going, not the one that matches last year's invoice.

**Want this built for you in just 3 days—for free—and you don't pay until you see traction? DM 'FLOW' or [click here](https://trueflow.ai) to see if you qualify.**

*Sources: HighLevel Changelog — "Wait Action: Major Revamp" (May 2026); Anthropic Code w/ Claude developer conference (May 22, 2026) Claude Managed Agents updates covering outcomes, multi-agent orchestration, and webhooks.*
