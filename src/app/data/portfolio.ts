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
 * Per-project link, keyed by the `id` used in public/i18n/projects/<lang>.json.
 * (Project images are set in that JSON, field `image`.)
 */
export const PROJECT_MEDIA: Record<string, { link?: string }> = {
  'ocr-document-analysis': {},
  'telephony-audio-quality': {},
  'game-data-extraction': {},
  'ai-chatbot': {},
  'stream-schedule': {},
  'headless-cms-sites': {},
};
