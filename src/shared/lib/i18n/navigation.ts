import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { defaultLocale, localeCodes, localePrefix } from './locales';

export const routing = defineRouting({
  locales: localeCodes,
  localePrefix: localePrefix,
  defaultLocale: defaultLocale,
});

export const { usePathname, useRouter } = createNavigation(routing);