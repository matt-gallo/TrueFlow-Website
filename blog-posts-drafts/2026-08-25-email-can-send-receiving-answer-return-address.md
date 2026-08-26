---
title: "Your Business Can Send Email. Receiving the Answer Is a Separate Setting."
date: 2026-08-25
author: "TrueFlow AI"
description: "We authenticated a client's sending domain down to the DKIM key, then read our own DMARC record back and found it reporting to nobody. Here's the Return Address — the three-step install that gives every automated message a way for the answer to reach a human."
hook_category: "curiosity gap / open loop"
---

On August 1 we finished authenticating a client's sending domain. A dedicated subdomain, so the root mail flow stayed untouched. SPF authorizing the sending platform. A published DKIM key. A DMARC record at `_dmarc`. Every one verified by direct lookup rather than by asking.

Then we read our own DMARC record back: `v=DMARC1; p=none;`. Nothing after the semicolon.

That record asks every receiving server on the internet to watch mail sent as that domain and file a daily report. It never says where to send the report. We had installed a monitor and left off the address. Correct, verifiable, and pointed at nobody.

One missing field. It is also the same missing field, three times over, in the stacks we audit.

## Sending is one build. Being reachable is another.

Every automated message your business sends has a forward path and a return path.

The forward path gets the attention, because it is the part that visibly works. The email went out. The workflow shows a green check. Somebody says the automation is live.

The return path is where an answer comes back — from the customer, or from the mail system itself — and it is configured somewhere else entirely. Usually by default. Usually to nowhere.

Three places it goes dark.

**The reply-to header.** Your platform will accept any string in the `From:` field and will never ask what happens when someone hits reply. If reply-to is unset, the answer goes back to that string. Often that is a mailbox nobody opens. Sometimes it is `no-reply@`, an address whose only function is to discard a customer who wanted to talk to you. Delete every no-reply address you own. No volume of outbound mail justifies refusing the response.

**The DMARC `rua`.** Aggregate reports are how you learn your mail is failing before a provider tells you the hard way. Without `rua=mailto:`, `p=none` is a policy with no readout. On July 31 a client's referral blast went out at 10:57 AM and the provider paused sending for bounce rate at 11:38 — about forty minutes. Nothing in that interval was visible to anyone.

**The forwarding rule on an outreach domain.** If you send cold email from a lookalike domain, replies land in a mailbox on that domain, not the one you check. Somebody has to forward it. It is the last step of the setup and the first one skipped.

## The Return Address

Twenty minutes, one message, three steps. Pick something the business already sends on its own — the booking confirmation, the invoice, the follow-up — and install a return path for it.

1. **Set reply-to explicitly**, to an inbox a named person opens. Not the `From:`. Not a shared alias with no owner. Not no-reply.

2. **Add `rua=mailto:` to the DMARC record** for that sending domain, pointed at that inbox or one beside it. If the root domain has no `_dmarc` record at all, add a monitoring one there too.

3. **Reply to the message yourself**, from an outside address, with one word. Then go find that word.

Step three is the build. The first two are configuration, and configuration reports on itself. A word you sent from your phone and then found in an inbox is evidence.

Run step three again the day anything about the sending domain changes, which is the day it usually breaks.

## Why it is worth the twenty minutes now

Since November 2025 Gmail has rejected non-compliant bulk mail at the SMTP level instead of filing it under spam, and in October 2025 Google retired the old Postmaster Tools dashboard for one organized around compliance status. Both changes assume a sender who is reading reports.

If nothing is reading them, the failure mode is not a full spam folder. It is silence, and silence looks exactly like a quiet week.

## Takeaway

Sent is a fact about your software. Received is a fact about a person. Nothing about the first one tells you anything about the second.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Sources: TrueFlow client sending-domain SOP and DNS verification records, August 1, 2026; Google Gmail sender guidelines enforcement change, November 2025.*
