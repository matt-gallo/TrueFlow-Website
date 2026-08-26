---
title: "Our Publisher Broke 46 Records in a Single Run. Undoing It Took One Command."
date: 2026-08-23
author: "TrueFlow AI"
description: "One bad run rewrote the image address on 46 posts and every one of them returned a 403. Undoing it was cheap, and that was luck rather than design. Here's the Undo Path — twenty minutes to find out which of your automations can be taken back and which ones cannot."
hook_category: "proof-of-work"
---

On August 17 our publisher rewrote the featured image on 46 blog posts in a single run. It rebuilt each address from parts instead of copying the one it had been handed, and dropped a date segment out of every filename. Every one of those images returned a 403. The manifest it wrote looked correct the whole time.

Undoing it took one command. The thing it had written to was a git repository, which keeps every prior version of every file by default. We reverted the commit, redeployed, and the images came back.

That is not a story about good engineering. Forty-six wrong records came out of one bad run, and the only reason it cost an afternoon instead of a week is that this particular automation happened to write into the one system in our stack that never throws anything away. Nobody designed for that. We inherited it.

## The Question That Comes After "Does It Work"

Nearly all the checking that happens before an automation goes live is about whether it does the right thing. Almost none of it is about what happens on the day it does the wrong thing at full speed. The second question is the more useful one, because the first has an answer that changes every time the software updates underneath you.

The Kore.ai Agent Productivity Index, fielded in May 2026 by Propeller Insights among 400-plus IT leaders at U.S. organizations with 2,000 or more employees, found that 79% had reversed an action taken by an AI agent.

That sample looks nothing like a nine-person service business and the number does not transfer. Take one thing from it. Reversal is not the exception case. It is routine, at companies that employ people whose entire job is catching this before it ships.

## The Undo Path

**The Undo Path.** For every automation that writes something, write down the literal steps that take back one run, and how long they take.

Four steps, about twenty minutes.

1. List every automation that *writes*. Not the ones that read or report. The ones that send a message, create a record, change a field, charge a card, publish a page, move a file. Stop at fifteen.

2. Next to each, write the largest number of things one run can touch. Not the average — the worst case. Ours was 46.

3. Write the undo as instructions, in order, as if you were handing them to somebody else at 6pm on a Friday. "Revert the commit, redeploy" is an undo. "Contact support" is not an undo. It is a hope with a ticket number.

4. Put a time on it. If you cannot write step three at all, write "none" and move on. That is the answer, and it is the most valuable line on the page.

Every row lands in one of three places. Reversible by you, in minutes. Reversible by somebody else, on their schedule. Not reversible at all.

## The Third Column Is Longer Than It Looks

A delivered email is in it. So is a text message. A review request sent to the wrong customer, a payment captured, a record deleted in a tool with no trash, a listing pushed to a directory that caches. None of those have an undo. An apology is not an undo. It is a second message.

Which means reversibility is mostly a property of the system you write into, not of the automation you built. You rarely get to choose it. You only get to know it in advance and size the run to match.

## What We Changed

Anything landing in that third column now gets a cap on how much one run can touch. Our publisher writes a single post per run, so the worst version of that Monday is one broken record instead of forty-six. And every build we hand off now carries one more line in the handoff doc: what one run of this touches, and how to take it back.

A client of ours opens a cold-email campaign this week into a twelve-thousand-contact list. Nothing about a delivered email is reversible, so the work went upstream of the send — the list, the fields, a small batch first. Once it goes there is no correction available. There is only a second email, which is a worse product than the first one.

## The Takeaway

You will not catch every bad run. What a bad run costs you was decided earlier, by whether the thing it writes into keeps what was there before.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Sources: TrueFlow's own site repository — commit history and image manifest, August 17, 2026; Kore.ai Agent Productivity Index, surveyed by Propeller Insights in May 2026, released June 17, 2026.*
