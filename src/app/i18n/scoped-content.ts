import { Signal, computed } from '@angular/core';
import { translateObjectSignal } from '@jsverse/transloco';

/**
 * The whole translation file of a scope (public/i18n/<scope>/<lang>.json) as a signal.
 * It updates when the language changes; while the file is still loading the
 * result is `null`, so templates can wrap their content in `@if (content(); as c)`.
 * Call it in a component field initializer (it needs an injection context).
 */
export function scopedContent<T>(scope: string): Signal<T | null> {
  const raw = translateObjectSignal(scope, {}, scope);
  return computed(() => {
    const value = raw() as unknown;
    return value && typeof value === 'object' && Object.keys(value).length ? (value as T) : null;
  });
}
