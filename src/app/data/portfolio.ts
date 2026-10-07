// Content for the landing page. Edit text here; the components only render it.
// Items in [BRACKETS] are placeholders still waiting for real content.

export interface FocusArea {
  title: string;
  text: string;
}

export interface Project {
  category: string;
  title: string;
  text: string;
  tags: string[];
  /** Image path under /public, e.g. 'public/projects/gnome.webp'. Leave empty for a placeholder. */
  image?: string;
  imageAlt?: string;
  /** Placeholder caption shown while there is no image yet. */
  placeholder: string;
  link?: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  text: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export const GITHUB_URL = 'https://github.com/dschrubba';

export const HERO = {
  name: 'Daniel',
  tagline: 'I build software where games, history and the web meet.',
  intro:
    'Independent developer and creative researcher. I reverse-engineer and preserve classic games, ' +
    'write engine tooling and shaders, and build fast, content-driven Angular sites.<br/><br/>' +
    'I’m a dedicated software developer who loves a good challenge. I see complex problems as the perfect ' +
    'opportunity to build creative solutions, often using new and emerging technologies.<br/><br/>' +
    'From concept to launch, I’ve delivered user-focused software both independently and in agile teams. I’m excited to bring my ' +
    'pragmatic approach to problem-solving, technical versatility, and UI/UX awareness ' +
    'to a team creating innovative software solutions.',
  city: 'Krefeld, NRW, Germany',
  /** Portrait under /public, e.g. 'public/images/self-880.webp'. Empty = blank placeholder. */
  photo: 'public/images/self-880.webp',
  photoAlt: 'Portrait of Daniel',
  /** Hero background: small and large versions, the browser picks by screen width. */
  background: 'public/images/fuji-2400.webp',
  backgroundSrcset: 'public/images/fuji-1280.webp 1280w, public/images/fuji-2400.webp 2400w',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Game preservation',
    text: 'Reverse engineering formats and runtimes so classic games keep running.',
  },
  {
    title: 'Engine & graphics',
    text: 'Character controllers, HTML-based UI and retro shaders for Flax Engine.',
  },
  {
    title: 'Modding & localization',
    text: 'Repacking archives and translating games, from Japanese sources to German releases.',
  },
  {
    title: 'Web development',
    text: 'Static, markdown-driven Angular sites that are fast and cheap to host.',
  },
];

export const PROJECTS: Project[] = [
  {
    category: 'Reverse engineering',
    title: 'G-NOME (1997) port',
    text: "Reimplementing the original game's script VM and asset pipeline on Panda3D, from decompiled data to a playable build.",
    tags: ['Python', 'Panda3D', 'Binary formats'],
    placeholder: '[SCREENSHOT — G-NOME port]',
  },
  {
    category: 'Graphics',
    title: 'Retro shaders for Flax',
    text: 'CRT, NTSC and PSX-era looks as post-processing for Flax Engine, tuned to read like real hardware rather than a filter.',
    tags: ['HLSL', 'Flax Engine'],
    placeholder: '[SCREENSHOT — CRT / PSX shader]',
  },
  {
    category: 'Gameplay',
    title: 'SoulSource controller',
    text: "Half-Life 2's Source Engine character movement, ported to Flax Engine as a reusable plugin.",
    tags: ['Flax Engine', 'Physics'],
    placeholder: '[SCREENSHOT — SoulSource]',
  },
  {
    category: 'Localization',
    title: 'Rosenkreuzstilette — German',
    text: 'A German fan translation: DxLib archive repacking tools plus a full pass over the scenario dialogue.',
    tags: ['DxLib', 'JA → DE', 'Tooling'],
    placeholder: '[SCREENSHOT — translated dialogue]',
  },
  {
    category: 'Web',
    title: 'ChroniclesTimeline',
    text: 'A database-free timeline site: drop a markdown file in, a build step indexes it, and the page scrolls to any entry by link.',
    tags: ['Angular', 'Signals', 'Bulma'],
    placeholder: '[SCREENSHOT — timeline]',
  },
  {
    category: 'Research',
    title: 'G-NOME: a video essay',
    text: "A German-language video essay on the game's history, built on primary sources dug up during the port.",
    tags: ['Research', 'Scriptwriting'],
    placeholder: '[THUMBNAIL — video essay]',
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '[YEAR] – now',
    title: 'Independent developer & researcher',
    text: 'Self-directed work across game development, preservation, modding and web projects.',
  },
  {
    period: '[YEAR] – [YEAR]',
    title: '[ROLE] · [COMPANY]',
    text: '[One line on what you built or owned there.]',
  },
  {
    period: '[YEAR] – [YEAR]',
    title: '[DEGREE / TRAINING] · [INSTITUTION]',
    text: '[Focus or notable work.]',
  },
];

export const STACK: StackGroup[] = [
  {
    title: 'Web',
    items: [
      'Angular',
      'TypeScript',
      'RxJS',
      'SCSS · Bulma',
      'Tailwind CSS',
      'WordPress themes',
      'PocketBase',
    ],
  },
  {
    title: 'Games & graphics',
    items: ['Flax Engine', 'HLSL', 'Panda3D', 'Ultralight', 'Source Engine'],
  },
  {
    title: 'Research & tooling',
    items: ['Python', 'Reverse engineering', 'Archive formats', 'Text encodings', 'DE · EN · JA'],
  },
];
