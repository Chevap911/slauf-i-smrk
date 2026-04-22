# Contact Form Lead Capture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean up the contact form, expand it to all services, preserve the informative estimate, and save partial leads after the first step with separate marketing consent.

**Architecture:** Keep the existing multi-step wizard and extend its data model instead of replacing it. Update the form component, API route, and email renderer together so service selection, estimation, lead capture, and notifications stay consistent.

**Tech Stack:** Next.js App Router, React client component state, Supabase insert API, Resend email templates, CSS modules.

---

### Task 1: Expand the form model and UI

**Files:**
- Modify: `components/Contact/Contact.tsx`
- Modify: `components/Contact/Contact.module.css`

- [ ] Replace the limited service list with the full list of current services and remove service descriptions from the cards.
- [ ] Replace slider inputs with direct numeric/select inputs and add facade height support up to 20 m.
- [ ] Add separate marketing-consent UI and keep the informative estimate visible.
- [ ] Clean the layout so the step content reads more clearly on desktop and mobile.

### Task 2: Add partial lead capture

**Files:**
- Modify: `components/Contact/Contact.tsx`
- Modify: `app/api/contact/route.ts`

- [ ] Trigger an autosave call when the user completes step 1 and moves forward.
- [ ] Accept a partial-save payload on the API without sending the final inquiry emails.
- [ ] Store the partial lead safely with enough context to reuse later.

### Task 3: Align notifications and stored details

**Files:**
- Modify: `app/api/contact/route.ts`
- Modify: `components/emails/InquiryEmail.tsx`

- [ ] Expand readable service-name mappings for all services.
- [ ] Update email detail rendering for the new fields and service taxonomy.
- [ ] Include marketing consent and partial/final state cleanly in stored details where useful.

### Task 4: Verify

**Files:**
- No code changes expected

- [ ] Run targeted lint checks on the changed files.
- [ ] Run a production build with `next build --webpack`.
- [ ] Start a fresh local preview if needed and spot-check the contact flow.
