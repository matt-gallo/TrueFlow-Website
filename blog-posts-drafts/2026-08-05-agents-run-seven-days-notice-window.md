---
title: "Google's Agents Can Now Run for Seven Days. Yours Should Be Capped at Your Notice Window."
date: 2026-08-05
author: "TrueFlow AI"
description: "On July 29, Google made Agent Runtime generally available — agents that run continuously for up to seven days. It shipped alongside identity, audit, and observability tooling, and that pairing is the whole lesson. Here's the Notice Window, the one number that should govern how long your automations run unattended."
hook_category: "contrarian / sacred-cow"
---

On July 29, 2026, Google moved Agent Runtime to general availability on the Gemini Enterprise Agent Platform. The headline capability: agents that run continuously for up to seven days. Google's own examples — a week-long sales sequence, a multi-stage onboarding, ongoing vendor compliance monitoring — are exactly the processes a small service business would love to hand off and stop thinking about.

Here's the unpopular part: you should not want that yet, and the same announcement tells you why.

## What Just Changed (In English)

Until now, the practical ceiling on an agent wasn't ambition. It was that the thing lost the plot. It forgot context, timed out, or needed a person to restart it. Agent Runtime and Agent Memory Bank going generally available removes that ceiling. An agent can now hold state across a week and keep making decisions while nobody is looking at it.

That's a real advance. It also moves the hard question. The constraint used to be "can it run long enough." The constraint now is "can you tell whether it's going well on day three."

## The Part of the Announcement Nobody Quoted

Google didn't ship seven-day autonomy by itself. In the same post it made Agent Identity, Agent Gateway, Agent Registry, Agent Evaluation, and Agent Observability generally available — a permissions model, a central control point, an inventory, a drift monitor, and end-to-end tracing. Duration and supervision shipped together, on purpose.

Read the customer quote Google chose to include. Best Buy's cloud platform engineering lead: "In the past, we've struggled with orphaned service accounts, unclear ownership, and permissions that kept growing over time."

That's a company with a dedicated platform engineering team admitting it lost track of automated things it built itself. Google's answer for them is a registry, a non-repudiable audit trail, and a live evaluation engine watching for behavioral drift in production.

You don't have any of that. You have an inbox, a phone, and a rough sense of whether this week felt normal.

That asymmetry is the whole story. Enterprises are getting seven-day agents because they're also buying the instruments to watch them. Take the duration without the instruments and you haven't bought autonomy — you've bought a week of unverified work.

## What We Do Differently

We size an agent's leash to something we call the **Notice Window**: how long a process can run wrong before a human in your business would notice on their own, without being told by a customer.

Three columns, one page, per automated process.

**Task.** What the agent actually owns.

**Daily blast radius.** What one day of wrong output costs — in dollars, or in customers touched.

**Notice window.** Honestly, when would you find out? Most answers we get are "when someone complains" or "at Monday's report." Write down the real one, not the flattering one.

Then one rule: an agent's unattended run length must be shorter than the notice window for its task. If your notice window on outbound messaging is a week, the agent doesn't get a week. It gets a day, and a checkpoint.

Second thing we build in: a heartbeat, not a completion notice. A daily two-line "here's what I did, here's what I'm about to do" beats a polished report on day seven, because it turns a silent failure into a boring email.

Third, and this is the one that gets pushback: we shorten notice windows before we lengthen leashes. Adding visibility to a step is cheaper than adding autonomy to it, and it's what makes the autonomy safe to add later. Agencies sell the leash because the leash demos well. The counter nobody sees is what keeps you out of trouble.

## What You Should Be Asking Right Now

Take your most automated process. If it started producing wrong output tomorrow morning, who finds out first — you, or your customer? And how many days does that take?

## The Takeaway

Seven-day autonomy is genuinely new, and the vendors shipping it are being unusually honest about its price: identity, audit, observability, evaluation. Most small businesses will buy the first half of that sentence and skip the second. The number that should govern your automations isn't the vendor's maximum run length — it's your own notice window. For most owners we talk to, that window is far longer than they expected, and finding that out is worth more than any new agent.

*If you'd like help setting notice windows and checkpoints for the automations you already run, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Sources: Google Cloud Blog, "What's new in Gemini Enterprise Agent Platform," July 29, 2026.*
