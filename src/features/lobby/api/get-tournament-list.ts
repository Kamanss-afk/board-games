import { useQuery, queryOptions } from '@tanstack/react-query';
import { fakeFetch } from '@/shared/lib/fake-fetch';

export const getTournamentList = ({
  gameId,
}: {
  gameId: string;
}): Promise<[]> => {
  return fakeFetch.get(`/tournament-list/${gameId}`, { data: [] });
};

export const getTournamentListQueryOptions = (gameId: string) => {
  return queryOptions({
    queryKey: ['tournament-list', gameId],
    queryFn: () => getTournamentList({ gameId }),
  });
};

type UseTournamentListOptions = {
  gameId: string;
};

export const useTournamentList = ({
  gameId,
}: UseTournamentListOptions) => {
  return useQuery({
    ...getTournamentListQueryOptions(gameId),
  });
};