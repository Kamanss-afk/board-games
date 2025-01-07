import { Suspense } from 'react';
import { GamesLayout } from '../ui/games-layout';
import { GamesGridSkeleton } from '../ui/games-grid.skeleton';
import { getCategoryGames } from '../api/get-category-games';
import { GamesGrid } from '../ui/games-grid';
import { GameCard } from '../ui/game-card';
import { GamesPagination } from '../ui/games-pagination';

export async function CategoryGames({
  page,
  category,
}: {
  page: number;
  category: {
    id: string;
    title: string;
    totalGames: number;
  },
}) {
  return(
    <GamesLayout
      title={category.title}
      content={(
        <GamesPagination currentPage={page} totalPages={Math.ceil(category.totalGames / 10)}> 
          <Suspense key={page} fallback={<GamesGridSkeleton size={10} />}>
            <CategoryGamesContent page={page} />
          </Suspense>
        </GamesPagination>
      )}
    />
  );
}

async function CategoryGamesContent({ page }: { page: number }) {
  const games = await getCategoryGames({ page, offset: 10 });

  return (
    <GamesGrid
      games={games}
      renderGame={(game) => <GameCard {...game} key={game.id} />}
    />
  );
};