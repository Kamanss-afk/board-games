import Link from 'next/link';
import { getNewGames } from '../api/get-new-games';
import { GameCard } from '../ui/game-card';
import { GamesGrid } from '../ui/games-grid';
import { GamesLayout } from '../ui/games-layout';
import { Suspense } from 'react';
import { GamesGridSkeleton } from '../ui/games-grid.skeleton';
import { paths } from '@/shared/lib/next-router';
import { getLocale, getTranslations } from 'next-intl/server';

export async function NewGamesFeed() {
  const locale = await getLocale();
  
  const t = await getTranslations({
    locale,
    namespace: 'GamesFeed',
  });

  return(
    <GamesLayout
      title={t('newGamesHeader')}
      extra={(
        <Link
          href={paths.category.getHref({ id: 'new' })}
          className="hover:underline"
        >
          {t('viewAllLink')}
        </Link>
      )}
      content={(
        <Suspense fallback={<GamesGridSkeleton />}>
          <NewGamesContent />
        </Suspense>
      )}
    />
  );
}

async function NewGamesContent() {
  const games = await getNewGames();

  return (
    <GamesGrid
      games={games}
      renderGame={(game) => <GameCard {...game} key={game.id} />}
    />
  );
};