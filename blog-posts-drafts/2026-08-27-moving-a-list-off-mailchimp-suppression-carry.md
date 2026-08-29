---
title: "We're Moving a Client Off Mailchimp This Week. The Export Carries Everyone Who Said Yes and Nobody Who Said No."
date: 2026-08-27
author: "TrueFlow AI"
description: "A list export is a file of people who opted in. The people who opted out live somewhere else in the account and do not ride along. Here's the Suppression Carry — the four steps that move the nos before the yeses."
hook_category: "insider / behind-the-curtain"
---

The line on our own task list this week reads: export the Mailchimp list to GoHighLevel, segment by engagement, exclude all unsubscribes.

The last three words are the whole job. Everything before them is a CSV download.

A list export is a file of people who said yes. The people who said no are a different object. Mailchimp holds them as contacts with an Email Marketing Status of Unsubscribed or Cleaned. GoHighLevel holds its own version as DND flags, set per channel. Neither platform knows what the other one has been told. The only thing connecting them is a step somebody has to remember.

## The Export Has a Status Column. The Import Doesn't Have to Read It.

An import wizard maps the columns you tell it to map. Marketing status is not one it honors on its own — in Mailchimp you pick that status from a dropdown at step sixteen, and if you pick Subscribed for the whole file, the file is subscribed.

There's a second constraint underneath that one, and it is the one that decides the order of operations. Mailchimp's own documentation on suppression imports says the process "can't mark existing contacts as unsubscribed or cleaned." It only sets status on records it creates. So if you load your active list first and your opt-outs second, the second import does nothing to anyone already in the audience. Every platform has a version of this rule. Load order is not a preference.

What comes out the other side is a first campaign that reaches people who told this business to stop, some of them years ago. A few unsubscribe again. A few press the spam button, which is the worse outcome, because that is a deliverability event and it lands on the sending domain of everybody else on the list.

Then there's the part that isn't about deliverability. The FTC's CAN-SPAM compliance guide requires an opt-out to be honored within 10 business days, and says that once someone has told you to stop, "you can't sell or transfer their email addresses, even in the form of a mailing list." Whether moving your own list between two platforms you own is a transfer is a question for a lawyer. The send that comes out of it is not a close question. Each separate email in violation carries a penalty of up to $53,088, and the same guide is explicit that hiring someone to run the migration does not move the responsibility to them.

## The Suppression Carry

Before any list moves between systems, the nos move first, as their own file, and you prove the destination is honoring them before a single campaign goes out.

Four steps.

**Export the negatives as their own file, first.** Every contact marked Unsubscribed or Cleaned, plus bounce and complaint records. Not a tab in the migration sheet. A separate file with its own name.

**Load the negatives before the actives.** This is the step the platform documentation quietly makes mandatory, and the step every rushed migration inverts.

**Count both files and reconcile.** Actives plus suppressed should add up to the old platform's total contact count. If it doesn't, there's a status you didn't export, and it is almost always the bounces.

**Send to a segment of one.** Use an address you already unsubscribed in the old system. If the test arrives, the carry failed, and you learned that at a cost of zero instead of at $53,088 a message.

That last step is the only one that produces evidence. The first three produce confidence, which is not the same thing.

## Every Migration Moves the Assets and Drops the Negatives

Suppression is the clearest case because the consequence is legal, but the pattern is general. Move a phone system and the opt-outs from text campaigns stay behind. Move a helpdesk and the blocked senders stay behind. Move a CRM and the do-not-call flags stay behind. Positive records — the contacts, the deals, the history — are what vendors build importers for, because those are what the buyer counted before signing. Nobody demos the suppression import.

We'd rather hold a launch a week than import an active list ahead of a suppression list. That opinion costs us calendar time on a client project roughly once a quarter, and it has never once cost anything else.

## Takeaway

Your list is two files. Most migrations move one.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Sources: Federal Trade Commission, "CAN-SPAM Act: A Compliance Guide for Business," penalty figure current as of the January 2024 inflation adjustment, read August 27, 2026; Mailchimp Help Center, "Import Suppression Lists," read August 27, 2026.*
