import Link from 'next/link';
import { paths } from '@/shared/lib/next-router';
import { ThemeSwitcher } from './theme-switcher';
import { LangSwitcher } from './lang-switcher';
import { HeaderButton } from '../ui/button';
import { LogIn } from '@/shared/icons/log-in';
import { getLocale, getTranslations } from 'next-intl/server';

export async function Header() {
  const locale = await getLocale();
  
  const t = await getTranslations({
    locale,
    namespace: 'Controls',
  });

  return(
    <header className="sticky top-0 z-[999] bg-inherit border-b">
      <div className="flex justify-between items-center py-3 container">
        <Link
          href={paths.home.getHref()}
          className='font-bold'
        >
          BGQ
        </Link>
        <div className="flex gap-3">
          <LangSwitcher />
          <ThemeSwitcher />
          <HeaderButton asChild>
            <Link href={paths.login.getHref()} aria-label={t('ariaLabelLangSwitcher')}>
              <LogIn />
            </Link>
          </HeaderButton>
        </div>
      </div>
    </header>
  );
}