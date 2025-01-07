'use client';
import { useTheme } from 'next-themes';
import { LightMode } from '@/shared/icons/light-mode';
import { DarkMode } from '@/shared/icons/dark-mode';
import { HeaderButton } from '../ui/button';
import { useTranslations } from 'next-intl';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const t = useTranslations('Controls');
  
  return (
    <HeaderButton
      size="icon"
      onClick={() => setTheme((value) => value == 'light' ? 'dark' : 'light')}
      aria-label={t('ariaLabelThemeSwitcher')}
    >
      <LightMode className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <DarkMode className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </HeaderButton>
  );
};