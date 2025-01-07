import Link from 'next/link';
import { sidebarItems } from '../config';
import { getLocale, getTranslations } from 'next-intl/server';

export async function HeaderNav() {
  const locale = await getLocale();

  const t = await getTranslations({
    locale,
    namespace: 'Navigation',
  });

  return(
    <nav>
      <ul className="flex gap-5 py-3 overflow-x-auto no-scrollbar text-sm lg:text-base">
        {sidebarItems.map(({ title, icon: Icon, link }) => (
          <li key={title} className="flex items-center whitespace-nowrap hover:text-primary cursor-pointer transition duration-300">
            <span className="min-w-[1.5rem]">
              <Icon size={'1rem'} />
            </span>
  
            <Link href={link}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}