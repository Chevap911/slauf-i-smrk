const version = "v=transparent-1";

export const HOMEPAGE_MASCOT_DIMENSIONS = {
  width: 1792,
  height: 2400,
} as const;

export const homepageMascots = {
  heroGuide: {
    src: `/characters/homepage/slauf-presenting.png?${version}`,
    alt: "",
  },
  heroBuddy: {
    src: `/characters/homepage/smrk-thumbs-up.png?${version}`,
    alt: "",
  },
  whyChooseUs: {
    src: `/characters/homepage/slauf-hands-on-hips.png?${version}`,
    alt: "",
  },
  services: {
    src: `/characters/homepage/slauf-pointing.png?${version}`,
    alt: "",
  },
  contact: {
    src: `/characters/homepage/smrk-waving.png?${version}`,
    alt: "",
  },
} as const;
