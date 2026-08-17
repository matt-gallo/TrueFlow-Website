---
title: "Stop Testing Whether It Works. Test What Happens When It Changes."
date: 2026-08-15
author: "TrueFlow AI"
description: "Every system in your business was verified against the first version of a record — the first quote, the first booking, the first contact. The failures live in the second. Here's the Revision Test, a twenty-minute walk-through of what your customer is actually holding after you change something."
hook_category: "contrarian / sacred-cow"
---

Yesterday a client opened a report we built for them and showed us what it said. It runs every weekday morning, summarizes the day's open deals, and lands in three inboxes before anyone gets to the office.

One of the deals in it covers several units. The report listed one.

Nothing errored. The job ran on schedule, the formatting was clean, the email arrived on time. It described the quote accurately — just not the version of the quote that exists now. Line items had been added after the fact, and the summary was still reading the shape the deal had the day it was created.

That one is ours. It was also the third instance of the same failure on a single call.

The other two came from the client's side of the screen. Editing a live quote and re-sending it locked the customer out of viewing it — a permissions error on their end, caused by a change on ours. And a contact whose name had been corrected still carried the old name on the deal attached to it, because the contact name and the deal name are two fields and only one of them got edited.

Three problems, one shape. Every one of those systems handled the creation of a record correctly and had no defined behavior for the change.

## The first version is the only one anybody tests

Think about how a workflow actually gets verified. You make a test contact. You submit a test form. You build a test quote and send it to yourself. The email arrives, the record moves, the stage advances. Done, and it goes live.

You almost never come back the next morning, edit that test record, and watch what the customer receives. Which means the entire change path — the reschedule, the revised price, the corrected email address, the added line item, the cancellation — shipped without being read once.

Here's the part another agency will argue with: most of what gets called a training problem is an untested change path. Nobody needs to be taught not to edit a quote. Somebody needed to check what editing a quote does, once, before a customer did it for them.

And changes are not the edge case. Creating a record happens once per customer. Changing it happens as many times as the job takes.

## The Revision Test

Twenty minutes, three records, one page.

Pick the three records your customers actually see. For most service businesses that is a quote or estimate, an appointment, and an invoice. Then, for each one, three columns.

1. **The record.**
2. **What the customer is holding.** The email in their inbox. The link they bookmarked. The text with a time in it. The PDF somebody downloaded and forwarded to a colleague.
3. **What they are holding after you change it.** Not what your screen shows. What is on the copy already in their possession.

Then make the change and watch. Reschedule the appointment. Add a line to the quote. Correct the name.

There are only three outcomes, and one of them is safe.

**It updates.** The customer's copy reflects the change with nobody doing anything. Worth knowing exactly which of your records behave this way, because it is fewer than you would guess.

**It does not update.** The customer holds the old version indefinitely, and both of you believe they have the current one. This is the quiet outcome, and it is the one that turns into a disagreement about what was agreed to.

**It breaks.** The change revokes their access, invalidates the link, or errors on their end. Loud, awkward, and at least it tells you.

Any row that lands in the second or third outcome needs a written rule, not a reminder.

Ours is now blunt: do not edit a sent quote. Build a new one, void the original, send the new link. That reads like a workaround for a limitation, and it is. It is also a policy with a second benefit — every version stays on the record, so the question of what was quoted and when has an answer that isn't somebody's memory.

## What to do this week

Take the record you would least like a customer to be wrong about. Change it. Then go look at what they have, from their side, not yours.

Your systems were designed around making things. Your week is spent changing them.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Source: internal TrueFlow client sessions and build reviews, August 12–14, 2026; client details anonymized.*
