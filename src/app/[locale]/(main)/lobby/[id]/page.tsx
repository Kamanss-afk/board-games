import { getTranslations } from 'next-intl/server';
import { LeaderboardSkeleton, RoomListSkeleton, TournamentListSkeleton } from '@/features/lobby';

type LobbyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LobbyPageProps) {
  const { locale } = await params;
  
  const t = await getTranslations({
    locale,
    namespace: 'LobbyPage',
  });

  return {
    title: t('meta_title'),
  };
}

export default function LobbyPage() {
  return(
    <>
      <RoomListSkeleton />
      <TournamentListSkeleton />
      <LeaderboardSkeleton />
    </>
  );
}