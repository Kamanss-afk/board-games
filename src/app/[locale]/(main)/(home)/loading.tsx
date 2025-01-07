import { BannerSkeleton } from '@/features/banner';
import { GamesFeedSkeleton } from '@/features/games';

export default function HomePageLoading() {
  return(
    <>
      <BannerSkeleton />
      <GamesFeedSkeleton />
      <GamesFeedSkeleton />
    </>
  );
}