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
  items: {
    title: string;
    text: string;
    /** Path under public/, without a leading slash, e.g. 'public/images-grid/gnome.webp'. Optional. */
    image?: string;
  }[];
}

export interface ProjectItem {
  /** Links the text to its image/link in data/portfolio.ts (PROJECT_MEDIA). */
  id: string;
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
