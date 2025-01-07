import { LeaderboardSkeleton, RoomListSkeleton, TournamentListSkeleton } from '@/features/lobby';

export default function LobbyPageLoading() {
  return(
    <>
      <RoomListSkeleton />
      <TournamentListSkeleton />
      <LeaderboardSkeleton />
    </>
  );
}