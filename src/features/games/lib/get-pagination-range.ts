export enum PaginationItemType {
  DOTS = 'dots',
  PREV = 'prev',
  NEXT = 'next',
}

export interface PaginationRangeProps {
  total: number;
  page: number;
  siblings?: number;
  boundaries?: number;
}

export type PaginationItemValue = number | PaginationItemType;

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const formatRange = (range: PaginationItemValue[]) => {
  return [PaginationItemType.PREV, ...range, PaginationItemType.NEXT];
};

export function getPaginationRange(props: PaginationRangeProps): PaginationItemValue[] {
  const {
    page,
    total,
    siblings = 1,
    boundaries = 1,
  } = props;

  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

  if (totalPageNumbers >= total) {
    return formatRange(range(1, total));
  }

  const leftSiblingIndex = Math.max(page - siblings, boundaries);
  const rightSiblingIndex = Math.min(page + siblings, total - boundaries);

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;

    return formatRange([
      ...range(1, leftItemCount),
      PaginationItemType.DOTS,
      ...range(total - (boundaries - 1), total),
    ]);
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;

    return formatRange([
      ...range(1, boundaries),
      PaginationItemType.DOTS,
      ...range(total - rightItemCount, total),
    ]);
  }

  return formatRange([
    ...range(1, boundaries),
    PaginationItemType.DOTS,
    ...range(leftSiblingIndex, rightSiblingIndex),
    PaginationItemType.DOTS,
    ...range(total - boundaries + 1, total),
  ]);
}