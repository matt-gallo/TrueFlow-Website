---
title: "Every Quote Opened Two Deals. Both Workflows Were Doing Exactly What They Were Told."
date: 2026-09-22
author: "TrueFlow AI"
description: "Two automations on a pipeline we built listened for the same event, and each quote produced a real deal and a blank twin. Neither workflow was wrong. The system was, and the cost was never the duplicate — it was the person who stops trusting the board."
hook_category: "mistake / warning"
---

This one is ours.

A sales pipeline we built started doing something small and irritating. Every time a quote went out, the deal moved to Submitted Pricing, which was correct. And a second deal appeared beside it. Same contact, same stage, completely blank.

Nothing errored. The board just got longer.

## Two Workflows Heard the Same Click

On a call this morning we traced it. Two workflows were listening for the same event: Quote Sent.

The first was created on August 28 to make sure every quote had a deal attached. Its instruction was simple. When a quote is sent, create an opportunity.

The second existed to keep deal values accurate. Its instruction was also simple. When a quote is sent, find the deal and update its value.

Both were correct. Each would have passed any test you gave it on its own. Run together, one updated the real deal and the other built an empty one next to it, every time a quote went out.

This is the failure that does not look like failure. Two reasonable instructions, written at different times, each answering a different question about the same moment. Nobody had asked which one owned it.

## The Duplicate Costs a Moment. The Doubt Costs the Pipeline.

A blank deal takes a moment to delete. That is not the damage.

The damage lands on whoever is looking at the board. The first time a rep sees two deals for one customer, he checks which one is real. The second time, he starts checking every deal. A few weeks in, the pipeline is something he verifies instead of something he trusts, and the reason it was built — so nobody has to carry the state of every deal in his head — is gone. He is carrying it again, plus a board.

That is the part owners feel and rarely name. Not "our CRM is buggy." A low hum of not quite believing the screen.

## More Workflows Is Not More Automation

Here is the position, and a fair number of agencies will dispute it.

The common way to build is one workflow per request. Someone asks for a deal on every quote, and a workflow appears. Someone asks for values to stay current, and another appears. Each one is tidy, each one is easy to explain on an invoice, and the account fills up. Nobody draws the map of which ones fire on the same event, because no single request ever asked for the map.

The number of workflows in an account is not a measure of how automated the business is. Past a point, it measures how many things can collide.

What we build to now: every trigger has exactly one workflow responsible for what happens next. If two jobs need to happen when a quote goes out, they live in the same workflow, in order, where each can see what the other did.

## We Did Not Add a Third Workflow

The instinct is to add a cleanup automation that finds and deletes the blank twins. That treats the symptom and adds a third thing listening to the same event.

We merged the two instead. One workflow now owns Quote Sent. It looks for an open deal on that contact with no quote attached yet. If it finds one, this is the first quote, and it updates that deal with the link, the value and the stage. If it finds none, the quote belongs to new work, and it creates a new deal with the quote number in the name.

The old second workflow went to draft. Parked, not deleted, so there is a record of what it used to do.

One thing from the same call is still open. The merged workflow is running minutes behind the action. A quote sent at 12:09 moved its deal at 12:11. We do not know why yet, and we are saying so, because a board that lags two minutes produces the same hum as a board that duplicates. The person in front of it starts checking.

## Takeaway

Two correct automations on one trigger make one wrong system. The duplicate is cheap to delete. What it costs is the person who stops believing the board and goes back to carrying the pipeline in his head.

*If you'd like help finding which of your automations are listening for the same event, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Source: TrueFlow pipeline troubleshooting call, September 22, 2026, and the workflow history of the pipeline involved.*
