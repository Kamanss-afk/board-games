'use client';

import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { GbFlag } from '@/shared/icons/gb-flag';
import { RuFlag } from '@/shared/icons/ru-flag';
import { locales, usePathname } from '@/shared/lib/i18n';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { HeaderButton } from '../ui/button';

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Controls');

  const handleChange = (lang: string) => {
    router.push(`/${lang}${pathname}`);
    router.refresh();
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <HeaderButton size="icon" aria-label={t('ariaLabelLangSwitcher')}>
          <LocaleFlag locale={locale} />
        </HeaderButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='bg-background'>
        {locales.map(locale => (
          <DropdownMenuItem
            key={locale.code}
            className='cursor-pointer'
            onClick={() => handleChange(locale.code)}
          >
            <LocaleFlag locale={locale.code} />
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LocaleFlag = ({ locale }: { locale: string }) => {
  switch(locale) {
  case 'ru':
    return <RuFlag />;
  case 'en':
    return <GbFlag />;
  default:
    return null;
  }
};