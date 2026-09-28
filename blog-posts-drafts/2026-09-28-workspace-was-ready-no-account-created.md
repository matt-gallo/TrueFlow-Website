---
title: "Our App Said Your Workspace Was Ready. No Account Had Been Created."
date: 2026-09-28
author: "TrueFlow AI"
description: "On September 23 we signed up for our own beta the way a stranger would. Google authorization failed, the screen said the workspace was ready, and the signup looped back to the start. The authorization bug was the louder problem. The screen was the more expensive one."
hook_category: "insider / behind-the-curtain"
---

On September 23 we signed up for our own beta the way a stranger would. Join the beta. Sign up with Google. Profile. Company name.

The last screen said *Setting up your workspace*, then *Your workspace is ready*, and then it put us back at the beginning of the signup.

Google authorization had failed several seconds before that screen appeared. No account was created. We confirmed it the only way that settles the question: no confirmation email arrived, because there was no user to send one to.

The authorization bug is ours and it is being fixed. It is not the part worth writing about.

## The Screen Was Reporting on Nothing

"Your workspace is ready" is a sentence about a record. It should be printable only by code that is holding that record. Ours printed it because the step before it had finished — not because anything had been written anywhere.

That distinction runs through every business that sends a confirmation. A confirmation either reads a result or announces an intention. The two are identical to the person reading them. They differ only on the days something breaks, which are the only days they matter.

Most confirmations are the second kind, and not because anyone decided that. They get wired to the submit event, because at the moment you build the flow the write always succeeds. You test it by doing it correctly. Doing it correctly is the one path that proves nothing.

## He Would Have Counted as a Conversion

Here is the part that should bother you more than the bug.

A failure that announces itself gets fixed. Somebody sees an error, screenshots it, sends it to you, and it enters the world as a ticket. A failure that congratulates the customer does not. The stranger who saw our screen would not have written to us. He would have believed he had an account, come back three days later, failed to sign in, decided our software is flaky, and gone quiet. Nothing anywhere holds a record of him.

Worse than nothing, actually. Our onboarding funnel would have counted him. He reached the final step. The final step said ready. As far as any number we look at, that was a completed signup.

A false confirmation does not only hide the failure. It files it under wins. That is how this class of bug survives for months inside businesses that watch their dashboards closely — the dashboard is reading the same optimistic message the customer got.

## We Fixed the Quieter Bug First

Two things were wrong: authorization failed, and the screen lied about it.

The obvious order is authorization first, because that is what blocks people today. We did the other one first, and I would argue for that order in anyone's business.

Fix only the authorization and you have repaired one path through a flow that will still congratulate the customer the next time any part of it breaks. So the confirmation moved behind the account write, and it can now render only from an account that exists. Authorization was fixed after that. The second fix protects one path. The first one protects every path that flow will ever have.

## Break It On Purpose and Read What the Customer Is Told

You will not find these by reading code, and you certainly will not find them by using your own form correctly.

Take the step your confirmation depends on and break it deliberately. Revoke the calendar connection. Put a wrong character in the CRM key. Disconnect the mail integration. Then go to your own site as a customer, submit the form, and read what the page says back to you.

If the confirmation still appears, it was never reading anything. Then check the inbox — if a message arrives telling you the appointment is booked, the file was received, the request is in, that message is a decoration too, and it travels further than the page did.

Run it on the three that carry the most weight: the booking, the intake form, the payment. Twenty minutes, and you know which of your promises are made by software that checked and which are made by software that assumed.

## Takeaway

A confirmation is either reading something or it is not. Your customer cannot tell the difference, and until you break the thing underneath it on purpose, neither can your reporting.

*Get one operational fix like this in your inbox every week — [subscribe here](https://trueflow.ai/subscribe).*

*Source: a recorded internal test of the TrueFlow beta onboarding flow, September 23, 2026.*
