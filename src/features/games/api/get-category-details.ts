import { fakeFetch } from '@/shared/lib/fake-fetch';
import { categoryList } from './data';
import type { Category } from '../model/types';

export const getCategoryDetails = async ({
  id,
  locale,
}: {
  id: string,
  locale: string
}): Promise<Category> => {
  return await fakeFetch.get(`/category/${id}`, { data: categoryList[locale][id] });
};