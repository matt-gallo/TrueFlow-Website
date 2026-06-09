---
title: "Anthropic Just Demoted Opus to Consultant. The 'Run Everything On The Big Model' Era Is Over."
date: 2026-05-11
author: "TrueFlow AI"
description: "Claude's new advisor tool just landed in public beta — and it ends the agency flex of quoting 'powered by Opus.' Here's what changed in our build process the week the header flipped on."
---

# Anthropic Just Demoted Opus to Consultant. The "Run Everything On The Big Model" Era Is Over.

Last week, Anthropic turned on the **advisor tool** in public beta on the Claude API. Claude Opus — the model every AI agency has been quietly quoting as "we use Anthropic's most capable model" on — is now demoted to a part-time consultant. The actual work runs on Sonnet (or Haiku). Opus tags in, drops a short plan or correction into the shared context, and tags back out. One Messages API request. Built-in spend caps. Live behind a single header: `anthropic-beta: advisor-tool-2026-03-01`.

That's the news. Here's the part nobody on AI Twitter is saying out loud.

## What Just Changed (In English)

For two years, the AI build market has been split into two ugly camps.

**Camp A** ran every workflow on the biggest model their client would tolerate paying for — Opus, GPT-5, whatever was top of the leaderboard. They quoted intelligence and quietly burned the client's token budget because their bill scaled with every chat, every refresh, every retry.

**Camp B** ran everything on Haiku or Sonnet to protect margin, and shipped brittle agents that fell apart the second a customer typed something unexpected.

The advisor tool collapses both camps into one default pattern. Your agent runs on Sonnet end-to-end. Opus sits behind it, sees the full shared context, and only speaks when the executor is stuck or about to do something dumb. The advisor never calls tools and never produces user-facing output — it just hands a 400-to-700-token correction back to the worker and disappears.

Anthropic's own benchmark on SWE-bench Multilingual: **+2.7 percentage points of accuracy, 11.9% lower cost per task** vs. running Sonnet alone. Compared to running Opus straight through, the cost delta is much bigger. That is not an incremental win. That is a build-pattern reset.

## The Trend Nobody's Saying Out Loud

Most AI agency decks still anchor on a sentence like "we use Anthropic's most powerful model." As of this month, that sentence is no longer a credential — it's an admission of bad architecture. The new flex isn't *how often* you call Opus. It's *how rarely*.

Anthropic just made tier-mixing the sane default. The agencies that cannot tell a client *why* their agent calls Opus on customer-message 47 but not on 46 are going to look like the people who couldn't explain their Zapier line-items in 2022.

This shows up in your invoice fast. If you're paying an agency a flat $4K–$8K/month retainer that includes "AI inference," ask which model handles which step. If the answer is "Opus, because it's the best," you're not paying for intelligence. You're funding the agency's margin and call it a feature.

## What TrueFlow Is Actually Doing Differently

Three things changed in our build process the week the advisor header flipped on.

**One — every new agent ships with Sonnet as the executor and Opus as advisor by default.** We don't quote "Opus-powered" builds anymore. We quote outcomes. Model routing is our problem, not the client's pitch deck.

**Two — we added a router audit step to every Three-Day Build.** We trace which prompts trigger an Opus consult and which don't. The client sees the call counts. If the executor is reaching for the advisor on more than ~8% of routine runs, we redesign the prompt before we reach for a bigger model. Bigger model is the last resort, not the first.

**Three — we stopped writing client proposals that name model versions at all.** The conversation moved to: appointments booked, leads qualified, hours of admin reclaimed. The infrastructure is implementation detail. If your current provider's deck still leads with "we use GPT-4 / Claude Opus / Gemini 1.5," that deck was written for a market that ended this quarter.

## What You Should Be Asking Right Now

Two questions to take to whoever is currently building your AI:

- "Which model handles which step in my workflow — and why that one?" If they can't answer in one sentence per step, they're not architecting. They're vibing.
- "When my volume doubles next quarter, does my AI inference bill double too?" The advisor pattern decouples cost growth from intelligence. Their answer tells you whether they've updated their stack since March.

## Final Takeaway

The big-model arms race is over for SMB automation. The teams that win the next twelve months won't be the ones with the most expensive model on the invoice — they'll be the ones who know exactly when to call it. Opus as consultant, Sonnet as worker, Haiku for the boring stuff. That's the shape of a sane build now.

Want this built for you in just 3 days—for free—and you don't pay until you see traction? DM 'FLOW' or [click here](https://trueflow.ai) to see if you qualify.

*Sources: Anthropic Claude Platform release notes (May 2026); the Claude blog post "The advisor strategy: Give Sonnet an intelligence boost with Opus"; Anthropic's advisor-tool API documentation; coverage from Builder.io and Testing Catalog.*
