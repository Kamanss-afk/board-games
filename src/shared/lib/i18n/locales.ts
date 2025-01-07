import type { LocalePrefixMode } from 'next-intl/routing';

type Locale = {
	code: string;
	name: string;
}

export const locales: Locale[] = [
  { 
    code: 'en',
    name: 'English',
  },
  {
    code: 'ru',
    name: 'Русский',
  },
];

export const localePrefix: LocalePrefixMode = 'as-needed';

export const localeCodes = locales.map(locale => locale.code);

export const defaultLocale = locales[0].code;