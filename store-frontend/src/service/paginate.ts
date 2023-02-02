import { Product } from '@types';

export const paginate = (
  items: Product[] | undefined,
  pageNumber: number,
  pageSize: number,
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items?.slice(startIndex, startIndex + pageSize);
};
