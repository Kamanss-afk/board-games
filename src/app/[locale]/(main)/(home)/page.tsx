import { Banner } from '@/features/banner';
import { FeaturedGamesFeed, NewGamesFeed } from '@/features/games';
import { getTranslations } from 'next-intl/server';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  
  const t = await getTranslations({
    locale,
    namespace: 'HomePage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function HomePage() {
  return (
    <>
      <Banner />
      <FeaturedGamesFeed />
      <NewGamesFeed />
    </>
  );
};