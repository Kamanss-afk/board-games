import { Suspense } from 'react';
import { getFeaturedGames } from '../api/get-featured-games';
import { GameCard } from '../ui/game-card';
import { GamesGrid } from '../ui/games-grid';
import { GamesLayout } from '../ui/games-layout';
import { GamesGridSkeleton } from '../ui/games-grid.skeleton';
import { getLocale, getTranslations } from 'next-intl/server';

export async function FeaturedGamesFeed() {
  const locale = await getLocale();
  
  const t = await getTranslations({
    locale,
    namespace: 'GamesFeed',
  });

  return(
    <GamesLayout
      title={t('featuredGamesHeader')}
      content={(
        <Suspense fallback={<GamesGridSkeleton />}>
          <FeaturedGamesContent />
        </Suspense>
      )}
    />
  );
}

async function FeaturedGamesContent() {
  const games = await getFeaturedGames();

  return (
    <GamesGrid
      games={games}
      renderGame={(game) => <GameCard {...game} key={game.id} />}
    />
  );
};