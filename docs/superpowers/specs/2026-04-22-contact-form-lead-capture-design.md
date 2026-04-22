# Contact Form Lead Capture Design

## Goal

Improve the contact form so it is cleaner, supports all current services, keeps the informative price estimate, and captures partial leads after the first step without using abandoned-form contacts for marketing unless the visitor gives explicit consent.

## Scope

This change updates:

- the multi-step contact form UI and field model
- lead capture behavior for incomplete form progress
- service-specific estimation inputs
- API payload handling for saved leads and final submissions
- inquiry email rendering for the expanded service list

This change does not include:

- CRM integration outside the existing project storage flow
- newsletter automation or external mailing sync
- changes to production deployment flow

## Design

### 1. Form structure

Keep the existing step flow, but simplify it:

1. `Osnovni podaci`
2. `Odabir usluge`
3. `Detalji usluge i procjena`

The service selection step will show all offered services in a compact grid with icon and service name only. Service descriptions are removed from the cards.

### 2. Service coverage

The form will support all core services currently marketed on the site:

- pranje fasade
- pranje okućnice
- pranje terasa
- pranje tlakavaca
- pranje prilaza
- kemijsko čišćenje namještaja
- čišćenje kamenih površina
- čišćenje drvenih površina
- detailing automobila
- pranje bazena
- održavanje grobnih mjesta

### 3. Service detail inputs

Range sliders are removed. Users enter values directly in standard inputs.

Rules:

- surface-based services use a numeric `kvadratura (m²)` field
- facade uses `kvadratura (m²)` plus `visina fasade (m)` up to 20 m
- pool uses a simpler size/notes model
- auto detailing uses package plus notes
- grave maintenance uses service frequency/notes style fields
- chemical cleaning uses furniture type plus quantity/notes

The form remains estimation-first, not quotation-final. Labels and helper text should make clear that the result is informative.

### 4. Lead capture

When the user completes the first step and clicks to continue, the app stores a partial lead if enough core contact data is present.

Stored lead fields:

- name
- email
- phone
- city
- current step
- selected service if available later
- partial service details if entered later
- marketing consent flag

This autosave happens in the background and should not interrupt the user.

### 5. Marketing consent

Because the user wants future outreach and mailing list potential, the form adds a separate, optional marketing consent checkbox. Partial lead storage can happen for the inquiry flow, but marketing use requires explicit opt-in.

Checkbox copy will be plain-language and separate from the form submission action.

### 6. Price estimate behavior

The informative estimate stays visible, but calculation switches from slider-driven values to direct-input values and service-specific rules.

The estimate should:

- use the updated price ranges already approved for each service
- react to manual square-meter input
- handle facade height as a multiplier or adjustment
- remain clearly labeled as informative only

### 7. API and email handling

The API route will accept both:

- partial lead saves
- final inquiry submissions

Final inquiry emails will reflect the new service taxonomy and new field set so the received message stays useful and readable.

## Recommended approach

Recommended approach: evolve the existing wizard instead of replacing it.

Why:

- preserves the current user journey that is already wired into the site
- reduces regression risk before deployment
- keeps estimation logic and email flow easy to adapt

## Acceptance criteria

- all current services appear in the contact form
- service cards no longer show descriptions
- sliders are removed
- facade allows manual square meters and height up to 20 m
- informative estimate still works
- partial lead is saved when the user moves past the first step
- marketing consent is separate and optional
- final inquiry email contains the right details for the chosen service
