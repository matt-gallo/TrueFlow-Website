---
title: "Four of Our Automations Stopped Last Week. Not One of Them Was Broken."
date: 2026-08-03
author: "TrueFlow AI"
description: "The most common way an automation dies isn't a bug — it's a consumable running out. Here's the Refill List: the three things every automation quietly burns, and the four-column page that catches them before your customers do."
hook_category: "insider / behind-the-curtain"
---

Last week, four automations in our orbit stopped doing their job. Here's the honest list, because it's more useful than a case study.

A call-recording tool switched itself off — the account had hit its cloud storage ceiling, so recordings simply stopped being saved. A notetaker joined a meeting and never got admitted by the host, so an hour of conversation now exists only in people's memory. A CRM sub-account went to a negative wallet balance after an auto-recharge attempt failed, which puts every message that account sends on a clock. And a weekly reporting job flagged an error that had been sitting unread since its last run.

Not one of those is a bug. Nothing was misconfigured. Every one of those workflows was built correctly and would pass a review today. They stopped because something ran out.

## The failure mode nobody builds for

We spend enormous energy protecting automations from breaking and almost none protecting them from emptying.

A bug is a one-time event. You fix it and it stays fixed — our own publishing pipeline jammed on a file lock in July, we fixed the lock, and it hasn't jammed since. A consumable is a different animal. It runs out, you refill it, and it immediately starts running out again. There is no version of "fixed."

Consumables also don't announce themselves the way bugs do. A bug throws an error with a timestamp and a stack trace. A drained consumable produces a system that reports success while doing nothing — the tool is up, the workflow fired, the log says complete, and the actual work quietly stopped happening two Tuesdays ago.

## The Refill List

Every automation you run burns at least one of three things. Sort yours.

**Capacity.** Storage, credits, message quotas, seats, API calls, contact limits — anything with a ceiling and a meter. Ceiling failures are the sneakiest, because everything works perfectly right up until it doesn't, and the tool usually keeps running. It just stops saving, sending, or enriching.

**Money.** Cards on file, wallet balances, auto-recharge thresholds, annual renewals, and the expiration date on the card funding all of it. A failed auto-recharge is one of the most common causes of an "our automation stopped" call we get, and it never looks like a technical problem, because it isn't one.

**Permission.** OAuth tokens, API keys, admin approvals, domain authentication records, and someone clicking "admit." Permissions decay on their own schedule. An employee leaves and their token walks out with them. A grant expires at ninety days. DNS gets edited during a website refresh and the sending domain quietly loses its authentication — the emails still send, they just stop arriving.

Now the math. The median small business runs about five AI tools (SBE Council, April 2026). Three consumable classes each is roughly fifteen quiet countdowns running underneath a stack the owner describes as "set up." Most owners can't name the renewal date on a single one.

The list itself is deliberately boring, which is why it works. For every automation: what does it burn, what's the ceiling, who refills it by name, and what tells you *before* it empties rather than after. Four columns, one page, reviewed on a fixed calendar date instead of on the day a customer notices.

## The part another agency will push back on

Monitoring your automations for errors is the wrong monitoring. Error alerts catch the failures that were going to get caught anyway — someone was going to notice a workflow throwing red. The expensive failures are the ones where every dashboard reports green and the output is zero.

And a build handed over without a Refill List isn't an asset you own. It's a countdown you're paying for. We won't hand one off without it, which occasionally means a launch slips a week — which is a strange week to spend, right up until you realize it's the document that decides whether the thing is still running in November.

## The takeaway

Before you build anything else this month, go look at what your current automations are burning. Pick the one you'd be most embarrassed to find dead, and answer four questions about it: what runs out, when, who refills it, and what warns you first. If you can't answer the fourth one, you don't have monitoring — you have a subscription and some optimism.

Nothing in your stack has to break for it to stop working. That's the part worth writing down.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Sources: internal TrueFlow and client-stack incidents, July 27 – August 3, 2026 (anonymized); SBE Council 2026 Small Business Technology Use Survey, April 2026.*
