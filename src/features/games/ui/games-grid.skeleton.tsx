import { Skeleton } from '@/shared/ui/skeleton';

export function GamesGridSkeleton({ size = 6 }: { size?: number }) {
  return(
    <div className="grid gap-1 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
      {Array(size).fill(0).map((_, index) => <Skeleton key={index} className="pb-[100%]" />)}
    </div>
  );
}