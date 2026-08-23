/**
 * Site-side multilingual routing helpers.
 *
 * Pages live under a single `src/pages/[locale]/...` dynamic-route layer
 * (one set of route files, not one physical folder per locale). Content
 * collections mirror this: each collection has `it/` and `en/`
 * subfolders, so `entry.id` is locale-prefixed (e.g. "it/some-slug/index").
 */

export const LOCALES = ['it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'it';

/** Display names for the locale switcher, each written in its own language (not translated). */
export const LOCALE_LABELS: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Splits a locale-prefixed collection entry id (e.g. "it/some-slug/index") into its locale and the rest of the path. */
export function splitLocaleId(id: string): { locale: string; rest: string } {
  const slashIndex = id.indexOf('/');
  if (slashIndex === -1) return { locale: id, rest: '' };
  return { locale: id.slice(0, slashIndex), rest: id.slice(slashIndex + 1) };
}

/** Turns a glob-loader entry id's "rest" part (e.g. "some-slug/index") into the URL slug ("some-slug"). */
export function slugFromRest(rest: string): string {
  return rest.replace(/\/index$/, '');
}

export interface LocalizedEntry<T> {
  locale: Locale;
  /** The entry's slug with the locale segment stripped — stable across locales for the same piece of content. */
  slug: string;
  entry: T;
  /** True when this locale has no translation of its own and `entry` is the default-locale content instead. */
  isFallback: boolean;
}

/**
 * Pairs every content-collection entry (id-prefixed with its locale, e.g.
 * "it/some-slug/index") with every configured locale, falling back to
 * `DEFAULT_LOCALE`'s entry — with a build-time warning — when a locale has
 * no translation of its own for a given slug. Safety net for content added
 * in one language before its translation exists.
 */
export function localizeCollection<T extends { id: string }>(
  entries: T[],
  collectionName: string,
  locales: readonly Locale[] = LOCALES,
  defaultLocale: Locale = DEFAULT_LOCALE
): LocalizedEntry<T>[] {
  const bySlug = new Map<string, Map<string, T>>();
  for (const entry of entries) {
    const { locale, rest } = splitLocaleId(entry.id);
    const slug = slugFromRest(rest);
    if (!bySlug.has(slug)) bySlug.set(slug, new Map());
    bySlug.get(slug)!.set(locale, entry);
  }

  const result: LocalizedEntry<T>[] = [];
  for (const [slug, byLocale] of bySlug) {
    const fallbackEntry = byLocale.get(defaultLocale);
    for (const locale of locales) {
      const entry = byLocale.get(locale) ?? fallbackEntry;
      if (!entry) continue; // no translation in this locale, and no default-locale entry to fall back to
      const isFallback = !byLocale.has(locale);
      if (isFallback) {
        console.warn(`[i18n] Missing "${locale}" translation for ${collectionName}/${slug} — falling back to "${defaultLocale}".`);
      }
      result.push({ locale, slug, entry, isFallback });
    }
  }
  return result;
}

/** Prepends `/{locale}` to a site-relative path (e.g. "/notizie/" -> "/it/notizie/"). */
export function localizePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}
