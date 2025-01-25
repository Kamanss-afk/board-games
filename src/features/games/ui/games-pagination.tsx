'use client';

import React, { useTransition, useOptimistic, useMemo } from 'react';
import { 
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/shared/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getPaginationRange, PaginationItemType, PaginationItemValue } from '../lib/pagination';
import { cn } from '@/shared/lib/css';
import { useTranslations } from 'next-intl';

export function GamesPagination({
  children,
  totalPages,
  currentPage,
}: {
  currentPage: number,
  totalPages: number,
  children: React.ReactNode,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('Pagination');

  const [isPending, startTransition] = useTransition();
  const [optimisticPage, setOptimisticPage] = useOptimistic(currentPage);

  const range = useMemo(() => {
    return getPaginationRange({ page: optimisticPage, total: totalPages });
  }, [totalPages, optimisticPage]);
  
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageClick = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    startTransition(() => {
      setOptimisticPage(page);
      router.push(createPageURL(page));
    });
  };

  const renderItem = (value: PaginationItemValue) => {
    if(value === PaginationItemType.PREV) {
      const pageNumber = Math.max(currentPage - 1, 1);

      return(
        <PaginationPrevious
          href={createPageURL(pageNumber)}
          onClick={(event) => handlePageClick(event, pageNumber)}
          aria-label={t('ariaLabelPaginationPrev')}
        />
      );
    }

    if(value === PaginationItemType.NEXT) {
      const pageNumber = Math.min(currentPage + 1, totalPages);

      return(
        <PaginationNext
          href={createPageURL(pageNumber)}
          onClick={(event) => handlePageClick(event, pageNumber)}
          aria-label={t('ariaLabelPaginationNext')}
        />
      );
    }

    if(value === PaginationItemType.DOTS) {
      return <PaginationEllipsis />;
    }

    return(
      <PaginationLink
        href={createPageURL(value)}
        isActive={optimisticPage === value}
        onClick={(event) => handlePageClick(event, value)}
      >
        {value}
      </PaginationLink>
    );
  };

  return(
    <div className="grid gap-3">
      <div className={cn({ 'animate-pulse': isPending })}>
        {children}
      </div>

      <Pagination aria-label={t('ariaLabelPagination')}>
        <PaginationContent>
          {range.map((item, index) => (
            <PaginationItem key={index}>{renderItem(item)}</PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}