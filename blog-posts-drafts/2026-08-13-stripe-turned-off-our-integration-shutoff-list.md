---
title: "Stripe Switched Off One of Our Integrations. The Notice Arrived Nine Days Later."
date: 2026-08-13
author: "TrueFlow AI"
description: "A vendor disabled a live connection on our own account and told us by email. Nothing on our side reported a problem. Here's the Shutoff List — the twenty-minute inventory of every connection a third party can turn off without asking you."
hook_category: "insider / behind-the-curtain"
---

On August 12 we got an email from Stripe. A webhook endpoint on our account had been automatically disabled after nine consecutive days of failed delivery, three of which returned HTTP 500. Stripe had been retrying, backing off, retrying, and had finally stopped.

Nothing on our side reported a problem. No alert fired. The database rows that endpoint writes were still landing — we'd checked those in early August and they looked normal. What was failing was the step after the write, and for nine days the only party who knew was Stripe.

So a company we don't work at made a decision about our infrastructure, told us by email, and we read the email nine days into the outage. We sell operations work. This one is ours.

## The part that generalizes

The specifics of our bug don't matter to you. The shape does.

Stripe's documented behavior is to retry a failing endpoint with exponential backoff for up to three days in live mode, then notify and disable it. That isn't hostile. It's how any serious platform protects itself from an endpoint that keeps erroring.

Now look at the rest of your stack. Meta will pause an ad account. Google will suspend an API project. Twilio will deregister a number that fails compliance. Your email provider will throttle a sending domain. Your CRM will stop retrying a webhook it can't reach.

Every one of those is a switch a third party can throw without your approval. And every one of them announces itself the same way — an email, sent to whichever address happened to be in the field the day the connection was made.

That address is the actual vulnerability. Ours went to the right place. It still took nine days, because nobody had a standing reason to be looking there.

## The Shutoff List

Twenty minutes, three columns, one page.

1. **The connection.** Payment processor, ad account, SMS number, sending domain, calendar sync, CRM webhook, every API key that touches money or bookings.
2. **Who can switch it off.** The vendor, not you. Write the vendor's name.
3. **Where the notice lands.** The exact email address, and the name of the human who opens that inbox on a normal Tuesday.

Column three is the whole exercise. Columns one and two are inventory; column three is the answer.

Most stacks fail the same way here. Connections get made by whoever was free that afternoon, using whatever address was handy — an `admin@` nobody monitors, the personal account of someone who has since left, a shared inbox with four thousand unread. The integration is fine. The notification path is a guess made two years ago in a hurry.

This is a different question from what expires. A card, a domain, a license — those run out on a date you can see coming and put on a calendar. A shutoff has no date. It's a decision made by someone else, in response to a fault you didn't know you had, delivered as a message.

## What to do with it

Two moves, and neither is a purchase.

Move every address in column three to an inbox a named person reads daily. Not a group alias with unclear ownership. A person. If you have to pick one place, use the address you'd notice a client email arriving at.

Then, for the two or three connections where money or bookings pass through, add a check that doesn't depend on email at all. Ours is now a weekly line in an existing report: last successful delivery, per endpoint, with the date. If the date stops moving, something is off — and we learn it from our own system rather than from a vendor's apology.

You don't need a monitoring product for this. A monitoring product bought for one incident becomes the eleventh tool nobody opens. You need to know which inbox each vendor writes to, and one number per critical connection that would look wrong if the connection were dead.

Ours would have. We just weren't looking at it.

Run the list on your own stack this week. Start with whatever takes payments.

Nine days is not a long outage. It's a long time to be the last to know.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Sources: Stripe webhook retry and endpoint-disabling behavior, [docs.stripe.com](https://docs.stripe.com/webhooks/process-undelivered-events), accessed August 13, 2026; TrueFlow's own Stripe endpoint-disabled notice, August 12, 2026.*
