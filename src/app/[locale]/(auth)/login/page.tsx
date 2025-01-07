import { Login } from '@/features/auth';
import { getTranslations } from 'next-intl/server';

type LoginPageProps = {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LoginPageProps) {
  const { locale } = await params;
  
  const t = await getTranslations({
    locale,
    namespace: 'LoginPage',
  });

  return {
    title: t('meta_title'),
  };
}

export default function LoginPage() {
  return <Login />;
}