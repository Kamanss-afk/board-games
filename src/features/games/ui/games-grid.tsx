import type { Game } from '../model/types';

export function GamesGrid({
  games,
  renderGame,
}: {
  games: Game[],
  renderGame: (game: Game) => React.ReactNode; 
}) {
  return(
    <div className="grid gap-1 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
      {games.map(item => renderGame(item))}
    </div>
  );
}