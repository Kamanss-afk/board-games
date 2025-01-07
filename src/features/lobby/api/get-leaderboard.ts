import { useQuery, queryOptions } from '@tanstack/react-query';
import { fakeFetch } from '@/shared/lib/fake-fetch';

export const getLeaderboard = ({
  gameId,
}: {
  gameId: string;
}): Promise<[]> => {
  return fakeFetch.get(`/leaderboard/${gameId}`, { data: [] });
};

export const getLeaderboardQueryOptions = (gameId: string) => {
  return queryOptions({
    queryKey: ['leaderboard', gameId],
    queryFn: () => getLeaderboard({ gameId }),
  });
};

type UseLeaderboardOptions = {
  gameId: string;
};

export const useLeaderboard = ({
  gameId,
}: UseLeaderboardOptions) => {
  return useQuery({
    ...getLeaderboardQueryOptions(gameId),
  });
};