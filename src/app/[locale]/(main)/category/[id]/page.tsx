import { CategoryGames, getCategoryDetails } from '@/features/games';
import { getTranslations } from 'next-intl/server';

type CategoryPageProps = {
  params: Promise<{ locale: string, id: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const { locale, id } = await params;
  const category = await getCategoryDetails({ id, locale });
  
  const t = await getTranslations({
    locale,
    namespace: 'CategoryPage',
  });

  return {
    title: t('meta_title', { title: category.title }),
    description: t('meta_description'),
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { page } = await searchParams;
  const { id, locale } = await params;

  const category = await getCategoryDetails({ id, locale });

  const currentPage = Number(page) || 1;

  return (
    <CategoryGames page={currentPage} category={category} />
  );
}