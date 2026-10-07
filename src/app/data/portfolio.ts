// Language-independent data: links and images.
// All visible text lives in public/i18n/<section>/<lang>.json.

export const GITHUB_URL = 'https://github.com/dschrubba';

export const HERO_MEDIA = {
  /** Portrait under /public. Empty = blank placeholder. */
  photo: 'public/images/self-880.webp',
  /** Hero background: small and large versions, the browser picks by screen width. */
  background: 'public/images/fuji-2400.webp',
  backgroundSrcset: 'public/images/fuji-1280.webp 1280w, public/images/fuji-2400.webp 2400w',
};

/**
 * Per-project image and link, keyed by the `id` used in public/i18n/projects/<lang>.json.
 * Leave `image` out to show the placeholder caption from the JSON.
 */
export const PROJECT_MEDIA: Record<string, { image?: string; link?: string }> = {
  'gnome-port': {},
  'retro-shaders': {},
  soulsource: {},
  rosenkreuzstilette: {},
  'chronicles-timeline': {},
  'gnome-essay': {},
};
