---
title: "Your Privacy Policy Is Now a Field in an API Call. A Carrier Reads It Before Your Customer Gets a Text."
date: 2026-08-28
author: "TrueFlow AI"
description: "Twilio made privacy policy and terms URLs required for new A2P 10DLC campaigns on June 30. There are two separate rejection codes: one for a missing field, one for a page that does not hold up. Here's the Linked Page — the pass that reads every URL you handed a third party as evidence about your business."
hook_category: "mistake / warning"
---

On April 6, 2026, Twilio published a changelog entry with a deadline in it. Starting June 30, `PrivacyPolicyUrl` and `TermsAndConditionsUrl` became required fields when registering a new A2P 10DLC campaign through the Messaging API. Requests that omit either one are rejected during campaign review.

That deadline has passed. Existing registered campaigns are not affected. But every new business texting campaign — a new location, a new brand, a reactivation number, a client you onboard next month — now depends on two pages of your website being read by someone who does not work for you.

## Two Rejection Codes, and Only One of Them Is About a Missing Field

Twilio's error dictionary keeps them separate, and the separation is the whole story.

Error 30933 means `PrivacyPolicyUrl` was not in the request. A field is absent. You add it and resubmit.

Error 30908 means the URL was there and the page behind it did not survive review. Twilio's documentation prints both sides. The language that gets rejected: *"We may share your personal information with third-party partners for marketing purposes."* The language that passes: *"We do not share, sell, or provide your mobile phone number or messaging consent data to third parties or affiliates for marketing or promotional purposes."*

The rejected sentence is standard template language. It ships inside most off-the-shelf privacy policies, and it was fine on your site for years, because until recently nothing was reading it.

The same document lists three other ways to fail with a valid URL: two privacy policies on one site that disagree, so a reviewer cannot tell which applies; a policy that never states message frequency; a policy missing the "message and data rates may apply" disclosure.

## Ours Was Last Touched on March 20, Which Is Before Any of This

We went and read our own page. It passes. It passes narrowly.

Our policy says *"Your SMS consent is not shared with third parties for their marketing purposes."* Twilio's approved sentence covers the mobile phone number as well as the consent record, adds affiliates alongside third parties, and adds promotional alongside marketing. Three widenings, none of them ours. The page carries message frequency and the data-rates line, so it clears the disclosure checks. It was last updated on March 20, 2026 — fifteen days before the changelog that changed what it is for.

Nothing broke. The document simply stopped being a legal footer and became evidence in someone else's review queue, and we found that out by looking rather than by being told.

## We Open the Page Logged Out, From a Browser With No Session

That is the first of three things we do differently, and it exists because "publicly accessible, not behind a login" is a stated requirement and a staging redirect will not announce itself.

Second, we check for a second copy. Sites accumulate them — one page from the old template, one from the redesign, both live, both indexed.

Third, we read the vendor's own printed pass-and-fail language instead of a summary of it. Twilio publishes the exact sentence. Most compliance write-ups paraphrase it. The paraphrase is what gets rejected.

## The Linked Page

**The Linked Page** is one pass over every URL you have handed a third party as evidence about your business, opened cold and read against what that third party requires today.

List them first. Privacy policy and terms given to your messaging platform. Refund policy given to your payment processor. Opt-in language given to your email platform. Terms linked from any form a customer submits.

Then, for each: open it in a private window. Confirm it loads without a login. Confirm there is exactly one of it. Read it against the requirement as written, not as remembered. Note the date it was last edited, and note what changed in the requirement after that date.

Twenty minutes covers most stacks.

## Which of Those Pages Has Anyone Opened Since You Submitted It?

A harder second question: when the website was last redesigned, who confirmed the URLs a vendor has on file still resolve to the pages they were approved against?

## Takeaway

A URL is a pointer. The thing under review is on the other end of it, and it is edited by a different process, on a different schedule, by people who were not in the room when it became evidence.

*If you'd like help running the Linked Page across your messaging and payment stack, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Sources: Twilio changelog, "A2P 10DLC campaign registration will require privacy policy and terms & conditions URLs starting June 30, 2026" (April 6, 2026); Twilio Error and Warning Dictionary, errors 30933 and 30908 (last modified April 1 and July 23, 2026).*
