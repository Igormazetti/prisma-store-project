import { PaginationContainer, Li, PageLink, Ul } from './Pagination.styles';
import { useState, useEffect } from 'react';

type IPagination = {
  items: number | undefined;
  currentPage: number;
  pageSize: number;
  onPageChange: any;
};

export default function Pagination({
  items,
  currentPage,
  pageSize,
  onPageChange,
}: IPagination) {
  const pages = items ? [Math.ceil(items % 6)] : [1];

  const itensArray: number[] = [];

  const handlePages = () => {
    for (let index = 0; index < pages[0]; index++) {
      itensArray.push(index + 1);
    }
  };

  handlePages();

  return (
    <PaginationContainer>
      <Ul>
        {itensArray.map((page: number) => (
          <Li
            key={page}
            className={page === currentPage ? 'active-page' : 'inactive-page'}
          >
            <PageLink onClick={() => onPageChange(page)}>{page}</PageLink>
          </Li>
        ))}
      </Ul>
    </PaginationContainer>
  );
}
