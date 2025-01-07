import { fakeFetch } from '@/shared/lib/fake-fetch';
import { gameList } from './data';
import type { Game } from '../model/types';

export const getFeaturedGames = async (): Promise<Game[]> => {
  return await fakeFetch.get('/featured-games', { data: gameList.slice(0, 6) });
};