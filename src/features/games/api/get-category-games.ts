import { fakeFetch } from '@/shared/lib/fake-fetch';
import { gameList } from './data';
import type { Game } from '../model/types';

export const getCategoryGames = async ({ page = 1, offset = 10 }: { page: number; offset: number }): Promise<Game[]> => {
  const currentPage = page - 1;

  const skip = currentPage * offset;
  const limit = currentPage * offset + offset;
  
  return await fakeFetch.get('/category-games', { data: gameList.slice(skip, limit) });
};