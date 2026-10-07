import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './i18n/transloco-loader';
import { LANGUAGES, initialLanguage } from './i18n/language';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: [...LANGUAGES],
        defaultLang: initialLanguage(),
        fallbackLang: 'en',
        missingHandler: { useFallbackTranslation: true, logMissingKey: isDevMode() },
        reRenderOnLangChange: true,
        // Section files are read whole (see i18n/scoped-content.ts), so keys
        // are written with their section name, e.g. 'hero' or 'hero.greeting'.
        scopes: { autoPrefixKeys: false },
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
