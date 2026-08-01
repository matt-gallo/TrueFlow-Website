---
title: "Your AI Agent Has a Setting Called 'Act Without Asking.' Do You Know What It Can Reach?"
date: 2026-08-01
author: "TrueFlow AI"
description: "Researchers disclosed flaws in a Claude browser extension in late July that let rogue extensions fire Gmail, Docs, and Calendar actions with no user click — with risk concentrated in one autonomy toggle. The lesson isn't that agents are dangerous. It's that almost no owner has ever looked at what theirs can reach."
hook_category: "question & challenge"
---

In the last week of July 2026, researchers disclosed a set of flaws in Anthropic's Claude Chrome extension: malicious browser extensions could generate synthetic clicks that fired real actions inside Gmail, Google Docs, and Google Calendar without the user touching anything. Per the disclosure, the risk was highest when the beta extension's "Act without asking" capability was switched on.

Read that setting name again. It's doing exactly what it says on the label.

## What Just Changed (In English)

Nothing about the agent broke. That's the part worth sitting with. The agent had permission to act in a Gmail account, so it acted in that Gmail account. Somebody else supplied the instruction.

This is now the dominant shape of AI incidents, and it is not a malfunction story. In the same stretch of July, Microsoft acknowledged a flaw in its Azure DevOps MCP server where hidden instructions buried inside a pull request could steer an AI coding assistant into exposing company information — using the developer's own permissions. Not stolen credentials. Borrowed ones. Legitimately granted, never scoped.

The industry has finally named the missing control. OWASP's Top 10 for Agentic Applications, published December 10, 2025, calls it *Least Agency*: minimum autonomy, minimum tool access, minimum credential scope. NIST's NCCoE concept paper on AI Agent Identity and Authorization (February 2026) breaks the same idea into four questions you should be able to answer about any agent you're running — who is it, what is it allowed to do, whose authority is it borrowing, and where is that written down.

Almost no small business can answer any of the four. And this isn't a new failure mode dressed up in new language: OWASP's Non-Human Identities Top 10 attributes 37% of non-human identity incidents to over-privileged identities — accounts handed far more than the job ever needed.

## What TrueFlow Is Actually Doing Differently

Here's the uncomfortable version. Most of the automation being sold to owners right now gets installed by clicking "Allow" on a consent screen that asks for everything, because everything is easier for the vendor to support than something.

We don't build that way, and I'd argue nobody should:

**Every agent gets its own identity, not yours.** If an agent runs on your login, you can't revoke it without locking yourself out, and your audit log will say *you* did whatever it did. One agent, one credential, revocable on its own.

**Scope to the job, not the platform.** An agent that drafts follow-ups for new leads needs write access to one pipeline, not your entire CRM. The agent that produces this blog authenticates with a token scoped to a single repository — it cannot reach any other repo, including near-identical ones sitting on adjacent accounts. That isn't paranoia. It's what makes a mistake survivable instead of expensive.

**Reversible by default, approval-gated when it isn't.** Drafting is reversible; sending is not. Updating a record is reversible; deleting a contact is not. Agents act freely on the first category and wait for a human on the second — and yes, that deliberately makes some workflows slower. We think that trade is obviously correct, and we know plenty of shops that would rather demo the fast version.

**Write down what it touched.** If you can't reconstruct what your agent did last Tuesday, you don't have automation. You have a rumor.

## What You Should Be Asking Right Now

**First: what could this agent do on its worst day?** Not its typical day — its worst one, fed a bad instruction from a form submission, a forwarded email, a scraped page. That's the real permission question, and it has nothing to do with whether the tool is trustworthy.

**Second: if you had to shut it off in ten minutes, could you — without breaking anything else?** If the honest answer involves changing your own password, the agent was never scoped in the first place.

## The Takeaway

Autonomy isn't a feature you buy. It's a dial you set, per agent, per job — and almost nobody has looked at theirs since the afternoon it was installed. Go open the permissions screen on every agent touching your business. It takes about twenty minutes, and it's the highest-leverage twenty minutes in your stack this month.

*If you'd like help scoping your agents' permissions down to the jobs they actually do, [book a strategy call with our team](https://trueflow.ai/book-strategy-call).*

*Sources: eSecurity Planet weekly security roundup, July 28, 2026, and TechRepublic reporting on the Claude Chrome extension flaws; Microsoft's acknowledgment of the Azure DevOps MCP prompt-injection issue, July 2026; OWASP Top 10 for Agentic Applications (December 10, 2025) and OWASP Non-Human Identities Top 10; NIST NCCoE concept paper on AI Agent Identity and Authorization (February 2026).*
