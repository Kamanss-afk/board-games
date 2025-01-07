import { useQuery, queryOptions } from '@tanstack/react-query';
import { fakeFetch } from '@/shared/lib/fake-fetch';

export const getRoomList = ({
  gameId,
}: {
  gameId: string;
}): Promise<[]> => {
  return fakeFetch.get(`/room-list/${gameId}`, { data: [] });
};

export const getRoomListQueryOptions = (gameId: string) => {
  return queryOptions({
    queryKey: ['room-list', gameId],
    queryFn: () => getRoomList({ gameId }),
  });
};

type UseRoomListOptions = {
  gameId: string;
};

export const useRoomList = ({
  gameId,
}: UseRoomListOptions) => {
  return useQuery({
    ...getRoomListQueryOptions(gameId),
  });
};