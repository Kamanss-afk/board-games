import { fakeFetch } from '@/shared/lib/fake-fetch';
import { gameList } from './data';
import type { Game } from '../model/types';

export const getNewGames = async (): Promise<Game[]> => {
  return await fakeFetch.get('/new-games', { data: gameList.slice(6, 12) });
};