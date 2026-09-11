---
title: "Twilio Says No Action Is Required. Starting September 14, It Moves the Code Nobody at Your Company Has Opened in Years."
date: 2026-09-11
author: "TrueFlow AI"
description: "Between September 14 and October 26, Twilio migrates every active Functions (Classic) build to its new platform without asking. Here's the Untouched List — every automation nobody has edited in twelve months, who built it, what it sends, and the one outside test that proves it still runs."
hook_category: "trend / this just changed"
---

On August 13, 2026, Twilio posted a changelog entry with a sentence in it that reads as reassurance: "No action is required from customers." Starting September 13, nobody can create a new Functions (Classic) build. Between September 14 and October 26, Twilio migrates every active Classic function — URLs, function and asset names, environment variables, deployed code — to the new Functions.

If a freelancer built your missed-call text-back or after-hours call routing on Twilio in 2020 or 2021, there is a fair chance it runs on Classic. Classic is the previous editor. Whatever is still on it is there because nobody moved it.

## "No Action Required" Describes the Migration, Not the Outcome

The phrase is accurate. Twilio does not need you to do anything for the move to happen. It says nothing about whether you will know when it happened, or whether the thing worked on the other side.

Twilio's own migration guide, last updated July 21, is the manual version of the same move. It runs nine steps. Step nine: if any phone numbers still reference the original Classic function, update them. A boxed warning: Assets (Classic) are not compatible with the new editor; re-upload them. A second warning covers auth tokens pasted straight into code instead of an environment variable — while a token updates, that function returns 403 Forbidden.

The automated migration may handle all of that cleanly. The changelog says the URLs move with the code. What it cannot do is tell you which day your account was moved, or place a test call afterward. Six weeks is the window. The day is Twilio's.

One more line from the guide: in Classic, logs "were available only while you viewed them in the Console UI." Whatever a Classic function did at two in the morning for the past several years, no record was kept unless someone was watching the screen. If one of yours has been failing quietly since spring, the migration will not be what broke it. It will be the first time anyone looked.

## Pipedrive Will Switch It Off for You

Twilio is not the only vendor acting on the parts of an account nobody opens. Pipedrive's April 2026 product update: automations that keep failing are now deactivated automatically "based on defined safeguards." May added email alerts to the automation owner when failures persist. Reasonable on its face. It also means a workflow that has been failing for months gets turned off by the vendor, and the notice goes to the owner of record, which on an account set up by an agency in 2022 may be a login nobody checks.

Twilio moves your code. Pipedrive turns off your workflow. HubSpot, as of September 8, enforces admin-set required fields on API writes; we covered that on September 1. Platforms have started touching the parts of your stack that nobody at your company touches. Those parts used to be safe precisely because they were untouched.

## The Part We Left Out in August

We wrote on August 20 about the four days our own blog publisher did nothing and nothing reported it. The part we did not dwell on: the file that failed was the one nobody had opened since it was written. The operating system had offloaded it as a cold file. It was cold because it had worked, and because it worked, nobody looked. That is the exact profile of a Classic function.

## The Untouched List

Every automation nobody has edited in twelve months, with three things written beside each: who built it, what it answers or sends, and the one test from outside that proves it still runs.

1. Pull the list from the tools, not from memory. Functions (Classic) has its own section in the Twilio Console. Most workflow builders show a last-edited date; anything older than a year goes on the list.
2. Name the builder. If the answer is a company you no longer work with, write that down. It is the most important field on the list.
3. Write what it does in one line — what comes in, what goes out, and to whom.
4. Write the outside test. For a phone function: call the number from a phone the CRM has never seen, after hours, and check where the text and the record land. For a workflow: trigger it with a fresh test record and look for the output, not the status.
5. Run the test now, and again the week after any vendor-announced window closes. For Twilio, that is the week of October 26.

Twelve months is the line because that is about how long an automation runs before nobody remembers how it is wired.

## Takeaway

Twilio's changelog says no action is required. That is a statement about Twilio's work, not yours. The code being moved is, by definition, the code nobody at your company has opened, and the only evidence it survived will be a call you place yourself.

*If you'd like help building an Untouched List for your phone and CRM automations, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Sources: Twilio Changelog, "Functions Classic is being deprecated and existing Functions (Classic) are moving to the new Functions," August 13, 2026; Twilio Docs, "Migrating from Functions (Classic) to the new Functions Editor," updated July 21, 2026; Pipedrive Product Updates, April and May 2026; HubSpot Developer Changelog, 2026-09 API version.*
