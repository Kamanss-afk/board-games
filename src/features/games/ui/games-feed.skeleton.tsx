import { Skeleton } from '@/shared/ui/skeleton';
import { GamesLayout } from './games-layout';
import { GamesGridSkeleton } from './games-grid.skeleton';

export function GamesFeedSkeleton() {
  return(
    <GamesLayout
      title={<Skeleton className="h-[1.5rem] w-[100px]" />}
      content={(
        <GamesGridSkeleton size={6} />
      )}
    />
  );
}