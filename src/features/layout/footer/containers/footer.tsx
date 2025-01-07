import { getLocale, getTranslations } from 'next-intl/server';

export async function Footer() {
  const locale = await getLocale();
  
  const t = await getTranslations({
    locale,
    namespace: 'Footer',
  });

  return(
    <footer className="py-4 container">
      &copy; {new Date().getFullYear()} | {t('copyright')}
    </footer>
  );
}