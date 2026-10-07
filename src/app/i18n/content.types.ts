// Shapes of the scoped translation files in public/i18n/<scope>/<lang>.json.
// Keep these in sync when adding fields to the JSON.

export interface HeroContent {
  greeting: string;
  tagline: string;
  /** May contain <br/> — rendered with innerHTML. */
  intro: string;
  city: string;
  ctaWork: string;
  ctaGithub: string;
  photoAlt: string;
}

export interface FocusContent {
  label: string;
  items: { title: string; text: string }[];
}

export interface ProjectItem {
  /** Links the text to its optional link in data/portfolio.ts (PROJECT_MEDIA). */
  id: string;
  /** Card image, path without a leading slash, e.g. 'public/images-grid/chatbot.webp'.
   *  Shown 16:9, cropped to cover and centred. Leave empty for the placeholder caption. */
  image?: string;
  category: string;
  title: string;
  text: string;
  tags: string[];
  placeholder: string;
}

export interface ProjectsContent {
  label: string;
  title: string;
  allRepos: string;
  tagsLabel: string;
  items: ProjectItem[];
}

export interface ExperienceContent {
  label: string;
  title: string;
  items: { period: string; title: string; text: string }[];
}

export interface StackContent {
  label: string;
  title: string;
  groups: { title: string; items: string[] }[];
}

export interface ContactContent {
  label: string;
  title: string;
  text: string;
  cta: string;
}
