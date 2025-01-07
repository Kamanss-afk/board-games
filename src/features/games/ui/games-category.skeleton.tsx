import { Skeleton } from '@/shared/ui/skeleton';
import { GamesLayout } from './games-layout';
import { GamesGridSkeleton } from './games-grid.skeleton';

export function GamesCategorySkeleton() {
  return(
    <GamesLayout
      title={<Skeleton className="h-[1.5rem] w-[100px]" />}
      content={(
        <div className="grid gap-3">
          <GamesGridSkeleton size={10} />
          <Skeleton className="h-[2.25rem] w-[20%] mx-auto block" />
        </div>
      )}
    />
  );
}