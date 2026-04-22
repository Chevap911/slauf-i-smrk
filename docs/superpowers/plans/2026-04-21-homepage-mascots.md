# Homepage Mascots Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Slauf i Smrk mascots back to the homepage as playful brand guides while keeping the real cleaning result, headline, and CTA as the primary conversion elements.

**Architecture:** Introduce a tiny reusable homepage mascot component plus a small asset/config layer so mascot styling stays consistent while each homepage section keeps its own positioning rules in its local CSS module. Keep mascot usage limited to the homepage hero plus a few section accents, and make mobile rules intentionally stricter than desktop so readability never regresses.

**Tech Stack:** Next.js 16 App Router, React 19, `next/image`, CSS Modules, local PNG assets under `public`

---

## File Structure

### New files

- `public/characters/homepage/slauf-presenting.png`
  - Hero guide mascot on the lower-left of the main result visual.
- `public/characters/homepage/smrk-thumbs-up.png`
  - Hero companion mascot on the upper-right of the main result visual.
- `public/characters/homepage/slauf-pointing.png`
  - Accent mascot for the services section header.
- `public/characters/homepage/smrk-waving.png`
  - Accent mascot for the contact section.
- `public/characters/homepage/slauf-hands-on-hips.png`
  - Accent mascot for the “Zašto odabrati nas?” section.
- `components/HomepageMascot/HomepageMascot.tsx`
  - Reusable `next/image` wrapper for decorative homepage mascots.
- `components/HomepageMascot/HomepageMascot.module.css`
  - Base mascot rendering styles: pointer-events, drop-shadow, containment.
- `components/HomepageMascot/homepageMascots.ts`
  - Central config for homepage mascot paths and image dimensions.

### Modified files

- `components/Hero/Hero.tsx`
  - Inject two mascot guides around the hero visual without touching the text hierarchy.
- `components/Hero/Hero.module.css`
  - Position hero mascots and hide/reduce them responsively.
- `components/WhyChooseUs/WhyChooseUs.tsx`
  - Add one mascot accent to the section header area.
- `components/WhyChooseUs/WhyChooseUs.module.css`
  - Position the section mascot and tune responsive behavior.
- `components/Services/Services.tsx`
  - Add one mascot accent to the services section header.
- `components/Services/Services.module.css`
  - Position the mascot so it points into the service cards without colliding with the header.
- `components/Contact/Contact.tsx`
  - Add one mascot accent to the left-hand info column / CTA area.
- `components/Contact/Contact.module.css`
  - Position the mascot and hide or reduce it on smaller screens.

### Verification targets

- `components/Hero/Hero.tsx`
- `components/WhyChooseUs/WhyChooseUs.tsx`
- `components/Services/Services.tsx`
- `components/Contact/Contact.tsx`
- Homepage route `/`

This repository does not currently include a React component test harness for these homepage sections, so verification for this visual-only feature uses targeted ESLint, production build, and manual desktop/mobile preview checks.

---

### Task 1: Stage Homepage Mascot Assets

**Files:**
- Create: `public/characters/homepage/slauf-presenting.png`
- Create: `public/characters/homepage/smrk-thumbs-up.png`
- Create: `public/characters/homepage/slauf-pointing.png`
- Create: `public/characters/homepage/smrk-waving.png`
- Create: `public/characters/homepage/slauf-hands-on-hips.png`

- [ ] **Step 1: Create the homepage mascot asset directory**

```bash
mkdir -p "public/characters/homepage"
```

- [ ] **Step 2: Copy the selected source PNGs into `public` with stable web names**

```bash
cp "Media/characters/Slauf_i_Smrk_Character_Sheets/slauf_bald/15_presenting.png" "public/characters/homepage/slauf-presenting.png"
cp "Media/characters/Slauf_i_Smrk_Character_Sheets/smrk_bearded/07_thumbs_up.png" "public/characters/homepage/smrk-thumbs-up.png"
cp "Media/characters/Slauf_i_Smrk_Character_Sheets/slauf_bald/09_pointing.png" "public/characters/homepage/slauf-pointing.png"
cp "Media/characters/Slauf_i_Smrk_Character_Sheets/smrk_bearded/06_waving.png" "public/characters/homepage/smrk-waving.png"
cp "Media/characters/Slauf_i_Smrk_Character_Sheets/slauf_bald/13_hands_on_hips.png" "public/characters/homepage/slauf-hands-on-hips.png"
```

- [ ] **Step 3: Verify the copied assets are present**

Run:

```bash
ls -1 "public/characters/homepage"
```

Expected output:

```text
slauf-hands-on-hips.png
slauf-pointing.png
slauf-presenting.png
smrk-thumbs-up.png
smrk-waving.png
```

- [ ] **Step 4: Commit the staged asset copy**

```bash
git add public/characters/homepage
git commit -m "feat: add homepage mascot assets"
```

---

### Task 2: Create a Reusable Homepage Mascot Component

**Files:**
- Create: `components/HomepageMascot/HomepageMascot.tsx`
- Create: `components/HomepageMascot/HomepageMascot.module.css`
- Create: `components/HomepageMascot/homepageMascots.ts`

- [ ] **Step 1: Create the homepage mascot config file**

```ts
// components/HomepageMascot/homepageMascots.ts
export const HOMEPAGE_MASCOT_DIMENSIONS = {
  width: 1792,
  height: 2400,
} as const;

export const homepageMascots = {
  heroGuide: {
    src: "/characters/homepage/slauf-presenting.png",
    alt: "",
  },
  heroBuddy: {
    src: "/characters/homepage/smrk-thumbs-up.png",
    alt: "",
  },
  whyChooseUs: {
    src: "/characters/homepage/slauf-hands-on-hips.png",
    alt: "",
  },
  services: {
    src: "/characters/homepage/slauf-pointing.png",
    alt: "",
  },
  contact: {
    src: "/characters/homepage/smrk-waving.png",
    alt: "",
  },
} as const;
```

- [ ] **Step 2: Create the reusable mascot component**

```tsx
// components/HomepageMascot/HomepageMascot.tsx
import Image from "next/image";
import styles from "./HomepageMascot.module.css";
import { HOMEPAGE_MASCOT_DIMENSIONS } from "./homepageMascots";

type HomepageMascotProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function HomepageMascot({
  src,
  alt = "",
  className,
  priority = false,
}: HomepageMascotProps) {
  const wrapperClassName = className
    ? `${styles.mascot} ${className}`
    : styles.mascot;

  return (
    <div className={wrapperClassName} aria-hidden={alt === ""}>
      <Image
        src={src}
        alt={alt}
        width={HOMEPAGE_MASCOT_DIMENSIONS.width}
        height={HOMEPAGE_MASCOT_DIMENSIONS.height}
        className={styles.image}
        priority={priority}
        sizes="(max-width: 576px) 96px, (max-width: 992px) 160px, 220px"
      />
    </div>
  );
}
```

- [ ] **Step 3: Create the base mascot CSS module**

```css
/* components/HomepageMascot/HomepageMascot.module.css */
.mascot {
    position: absolute;
    display: block;
    pointer-events: none;
    user-select: none;
    z-index: 2;
}

.image {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 16px 26px rgba(0, 51, 102, 0.18));
}
```

- [ ] **Step 4: Run targeted ESLint on the new component files**

Run:

```bash
npx eslint components/HomepageMascot/HomepageMascot.tsx components/HomepageMascot/homepageMascots.ts
```

Expected output:

```text
[no output]
```

- [ ] **Step 5: Commit the reusable mascot layer**

```bash
git add components/HomepageMascot
git commit -m "feat: add reusable homepage mascot component"
```

---

### Task 3: Add Hero Mascots Without Breaking the Conversion Hierarchy

**Files:**
- Modify: `components/Hero/Hero.tsx`
- Modify: `components/Hero/Hero.module.css`

- [ ] **Step 1: Import the mascot component and config into the hero**

```tsx
// add near the top of components/Hero/Hero.tsx
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
```

- [ ] **Step 2: Render the two hero mascots around the existing result visual**

```tsx
// add inside the existing styles.visual block in components/Hero/Hero.tsx
<HomepageMascot
  src={homepageMascots.heroGuide.src}
  alt={homepageMascots.heroGuide.alt}
  className={styles.heroMascotGuide}
/>

<HomepageMascot
  src={homepageMascots.heroBuddy.src}
  alt={homepageMascots.heroBuddy.alt}
  className={styles.heroMascotBuddy}
/>
```

- [ ] **Step 3: Add hero mascot positioning rules that keep text and CTA untouched**

```css
/* add to components/Hero/Hero.module.css */
.heroMascotGuide {
    left: -1.5rem;
    bottom: 0.75rem;
    width: clamp(120px, 18vw, 210px);
}

.heroMascotBuddy {
    right: -0.5rem;
    top: 1rem;
    width: clamp(116px, 16vw, 190px);
}

@media (max-width: 992px) {
    .heroMascotGuide {
        left: 0;
        bottom: 0.5rem;
        width: 148px;
    }

    .heroMascotBuddy {
        right: 0;
        top: 0.75rem;
        width: 132px;
    }
}

@media (max-width: 576px) {
    .heroMascotGuide {
        width: 110px;
        left: 0.25rem;
        bottom: 0.25rem;
    }

    .heroMascotBuddy {
        display: none;
    }
}
```

- [ ] **Step 4: Run targeted ESLint on the hero files**

Run:

```bash
npx eslint components/Hero/Hero.tsx
```

Expected output:

```text
[no output]
```

- [ ] **Step 5: Commit the hero mascot integration**

```bash
git add components/Hero/Hero.tsx components/Hero/Hero.module.css
git commit -m "feat: add mascot guides to homepage hero"
```

---

### Task 4: Add a Mascot Accent to “Zašto odabrati nas?”

**Files:**
- Modify: `components/WhyChooseUs/WhyChooseUs.tsx`
- Modify: `components/WhyChooseUs/WhyChooseUs.module.css`

- [ ] **Step 1: Import the mascot component and config into the section**

```tsx
// add near the top of components/WhyChooseUs/WhyChooseUs.tsx
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
```

- [ ] **Step 2: Render the mascot inside the section header**

```tsx
// replace the header block in components/WhyChooseUs/WhyChooseUs.tsx
<div className={styles.header}>
    <div className={styles.headerCopy}>
        <h2 className={styles.title}>Zašto odabrati nas?</h2>
        <p className={styles.subtitle}>
            Povjerenje klijenata gradimo na kvaliteti, transparentnosti i vrhunskim rezultatima.
        </p>
    </div>

    <HomepageMascot
        src={homepageMascots.whyChooseUs.src}
        alt={homepageMascots.whyChooseUs.alt}
        className={styles.sectionMascot}
    />
</div>
```

- [ ] **Step 3: Add section header positioning styles**

```css
/* add to components/WhyChooseUs/WhyChooseUs.module.css */
.header {
    position: relative;
}

.headerCopy {
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;
}

.sectionMascot {
    right: 3rem;
    top: -0.5rem;
    width: clamp(96px, 12vw, 140px);
}

@media (max-width: 768px) {
    .sectionMascot {
        display: none;
    }
}
```

- [ ] **Step 4: Run targeted ESLint on the section component**

Run:

```bash
npx eslint components/WhyChooseUs/WhyChooseUs.tsx
```

Expected output:

```text
[no output]
```

- [ ] **Step 5: Commit the “Zašto mi” mascot accent**

```bash
git add components/WhyChooseUs/WhyChooseUs.tsx components/WhyChooseUs/WhyChooseUs.module.css
git commit -m "feat: add mascot accent to why-choose-us section"
```

---

### Task 5: Add Mascot Accents to Services and Contact

**Files:**
- Modify: `components/Services/Services.tsx`
- Modify: `components/Services/Services.module.css`
- Modify: `components/Contact/Contact.tsx`
- Modify: `components/Contact/Contact.module.css`

- [ ] **Step 1: Import mascot helpers into `Services.tsx`**

```tsx
// add near the top of components/Services/Services.tsx
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
```

- [ ] **Step 2: Add the pointing mascot to the services header**

```tsx
// replace the header block in components/Services/Services.tsx
<div className={styles.header}>
    <div className={styles.headerCopy}>
        <h2 className={styles.subtitle}>Naše Usluge</h2>
        <p className={styles.sectionDesc}>
            Specijalizirani smo za visokotlačno pranje svih vanjskih površina. Naša stručnost i ekološki prihvatljiva sredstva jamče vrhunske rezultate.
        </p>
    </div>

    <HomepageMascot
        src={homepageMascots.services.src}
        alt={homepageMascots.services.alt}
        className={styles.sectionMascot}
    />
</div>
```

- [ ] **Step 3: Add the services mascot positioning CSS**

```css
/* add to components/Services/Services.module.css */
.header {
    position: relative;
}

.headerCopy {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
}

.sectionMascot {
    left: 3rem;
    top: 0.5rem;
    width: clamp(96px, 12vw, 150px);
}

@media (max-width: 768px) {
    .sectionMascot {
        display: none;
    }
}
```

- [ ] **Step 4: Import mascot helpers into `Contact.tsx`**

```tsx
// add near the top of components/Contact/Contact.tsx
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
```

- [ ] **Step 5: Add the waving mascot to the left info column**

```tsx
// add inside the existing styles.info block in components/Contact/Contact.tsx, after the contact details
<HomepageMascot
  src={homepageMascots.contact.src}
  alt={homepageMascots.contact.alt}
  className={styles.contactMascot}
/>
```

- [ ] **Step 6: Add the contact mascot positioning CSS**

```css
/* add to components/Contact/Contact.module.css */
.info {
    position: relative;
}

.contactMascot {
    right: -1rem;
    bottom: -1.5rem;
    width: clamp(110px, 14vw, 170px);
}

@media (max-width: 992px) {
    .contactMascot {
        right: 0;
        bottom: -1rem;
        width: 130px;
    }
}

@media (max-width: 768px) {
    .contactMascot {
        display: none;
    }
}
```

- [ ] **Step 7: Run targeted ESLint on the modified section files**

Run:

```bash
npx eslint components/Services/Services.tsx components/Contact/Contact.tsx
```

Expected output:

```text
[no output]
```

- [ ] **Step 8: Commit the section mascot accents**

```bash
git add components/Services/Services.tsx components/Services/Services.module.css components/Contact/Contact.tsx components/Contact/Contact.module.css
git commit -m "feat: add mascot accents to homepage sections"
```

---

### Task 6: Final Responsive Polish and Verification

**Files:**
- Verify: `components/Hero/Hero.tsx`
- Verify: `components/WhyChooseUs/WhyChooseUs.tsx`
- Verify: `components/Services/Services.tsx`
- Verify: `components/Contact/Contact.tsx`

- [ ] **Step 1: Run focused ESLint across homepage-related app/components files**

Run:

```bash
npx eslint app components next.config.ts --max-warnings=0
```

Expected output:

```text
[no output]
```

- [ ] **Step 2: Run a production build**

Run:

```bash
npx next build --webpack
```

Expected output:

```text
✓ Compiled successfully
✓ Generating static pages
```

- [ ] **Step 3: Start the local production preview**

Run:

```bash
npm run start -- --hostname 127.0.0.1 --port 3001
```

Expected output:

```text
▲ Next.js 16.1.6
- Local:         http://127.0.0.1:3001
✓ Ready
```

- [ ] **Step 4: Verify the homepage manually on desktop and mobile widths**

Check:

```text
Desktop:
- both hero mascots visible
- title, description, CTA, and hero image remain unobstructed
- “Zašto odabrati nas?” mascot reads as a brand accent, not a layout collision
- services mascot points into the cards area without covering the heading
- contact mascot feels supportive, not intrusive

Mobile:
- only one hero mascot remains visible
- section mascots hidden where space is too tight
- no mascot overlaps the form, title, CTA, or trust cards
```

- [ ] **Step 5: Commit the finished homepage mascot implementation**

```bash
git add public/characters/homepage components/HomepageMascot components/Hero/Hero.tsx components/Hero/Hero.module.css components/WhyChooseUs/WhyChooseUs.tsx components/WhyChooseUs/WhyChooseUs.module.css components/Services/Services.tsx components/Services/Services.module.css components/Contact/Contact.tsx components/Contact/Contact.module.css
git commit -m "feat: add homepage mascot guides"
```

---

## Self-Review

### Spec coverage

- Hero mascots are covered in Task 3.
- Additional mascot placements are covered in Tasks 4 and 5.
- Asset preparation is covered in Task 1.
- Responsive, accessibility, and performance guardrails are covered in Tasks 2, 3, 5, and 6.

### Placeholder scan

- No `TODO`, `TBD`, or vague “handle later” language remains.
- All new files, commands, asset names, and component names are explicit.

### Type consistency

- Reusable component name is consistently `HomepageMascot`.
- Shared config object is consistently `homepageMascots`.
- All selected mascot images use the same known dimensions `1792x2400`.
