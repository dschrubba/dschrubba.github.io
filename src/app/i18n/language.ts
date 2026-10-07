import { DOCUMENT, Injectable, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { TranslocoService, getBrowserLang, translateSignal } from '@jsverse/transloco';

export const LANGUAGES = ['de', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

const STORAGE_KEY = 'lang';

function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

/** Saved choice first, then the browser language, then English. */
export function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage blocked (private mode etc.) — fall through.
  }
  return getBrowserLang() === 'de' ? 'de' : 'en';
}

/** Switches the language, remembers it, and keeps <html lang>, title and description in sync. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly transloco = inject(TranslocoService);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly languages = LANGUAGES;
  readonly active = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  private readonly pageTitle = translateSignal('meta.title');
  private readonly pageDescription = translateSignal('meta.description');

  constructor() {
    effect(() => {
      const lang = this.active();
      this.document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Not critical.
      }
    });
    effect(() => {
      const title = this.pageTitle();
      if (title && title !== 'meta.title') this.title.setTitle(title);
      const description = this.pageDescription();
      if (description && description !== 'meta.description') {
        this.meta.updateTag({ name: 'description', content: description });
      }
    });
  }

  use(lang: Language) {
    this.transloco.setActiveLang(lang);
  }
}
