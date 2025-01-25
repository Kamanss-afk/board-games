import { getPaginationRange, PaginationItemType } from '../pagination';

describe('pagination range', () => {
  it('should return range', () => {
    expect(getPaginationRange({ page: 1, total: 2 })).toEqual([
      PaginationItemType.PREV,
      1, 2,
      PaginationItemType.NEXT,
    ]);
  });

  it('should return range with left dots', () => {
    expect(getPaginationRange({ page: 5, total: 8 })).toEqual([
      PaginationItemType.PREV,
      1,
      PaginationItemType.DOTS,
      4, 5, 6, 7, 8,
      PaginationItemType.NEXT,
    ]);
  });

  it('should return range with right dots', () => {
    expect(getPaginationRange({ page: 3, total: 8 })).toEqual([
      PaginationItemType.PREV,
      1, 2, 3, 4, 5,
      PaginationItemType.DOTS,
      8,
      PaginationItemType.NEXT,
    ]);
  });

  it('should return range with right and left dots', () => {
    expect(getPaginationRange({ page: 5, total: 10 })).toEqual([
      PaginationItemType.PREV,
      1,
      PaginationItemType.DOTS,
      4, 5, 6,
      PaginationItemType.DOTS,
      10,
      PaginationItemType.NEXT,
    ]);
  });

  it('should return range without siblings and boundaries', () => {
    expect(getPaginationRange({
      page: 10,
      total: 20,
      siblings: 0,
      boundaries: 0,
    })).toEqual([
      PaginationItemType.PREV,
      PaginationItemType.DOTS,
      10,
      PaginationItemType.DOTS,
      PaginationItemType.NEXT,
    ]);
  });

  it('should return range with custom siblings and boundaries', () => {
    expect(getPaginationRange({
      page: 10,
      total: 20,
      siblings: 2,
      boundaries: 2,
    })).toEqual([
      PaginationItemType.PREV,
      1, 2,
      PaginationItemType.DOTS,
      8, 9, 10, 11, 12,
      PaginationItemType.DOTS,
      19, 20,
      PaginationItemType.NEXT,
    ]);
  });
});