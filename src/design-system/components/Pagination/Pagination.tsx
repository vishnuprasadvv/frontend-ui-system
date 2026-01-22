import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { cn } from '@/lib/utils';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  const handlePrev = () => {
    if (canGoPrev) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (canGoNext) onPageChange(page + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxDisplayed = 5;
    const half = Math.floor(maxDisplayed / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, start + maxDisplayed - 1);

    if (end - start < maxDisplayed - 1) {
      start = Math.max(1, end - maxDisplayed + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === page ? 'default' : 'outline'}
          className={cn("h-9 px-3 rounded-full",
            i === page && "bg-(--custom-primary) hover:bg-(--custom-primary-hover)"
          )}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        className="h-9 px-3 rounded-full"
        onClick={handlePrev}
        disabled={!canGoPrev}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="outline"
        className="h-9 px-3 rounded-full"
        onClick={handleNext}
        disabled={!canGoNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
