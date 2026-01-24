import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/design-system";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  size?: "sm" | "md" | "lg";
  className?: string;
}

const slotClassMap = {
  sm: "h-8 min-w-8 px-1",
  md: "h-9 min-w-9 px-2",
  lg: "h-11 min-w-11 px-4",
};

const SIBLING_COUNT = 1; // pages beside current
const BOUNDARY_COUNT = 1; // first + last

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  size = "md",
  className,
}) => {
  if (totalPages <= 1) return null;

  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const startPages = range(1, Math.min(BOUNDARY_COUNT, totalPages));
  const endPages = range(
    Math.max(totalPages - BOUNDARY_COUNT + 1, BOUNDARY_COUNT + 1),
    totalPages,
  );

  const siblingsStart = Math.max(page - SIBLING_COUNT, BOUNDARY_COUNT + 2);

  const siblingsEnd = Math.min(
    page + SIBLING_COUNT,
    totalPages - BOUNDARY_COUNT - 1,
  );

  const pages: (number | "...")[] = [];

  // first pages
  startPages.forEach((p) => pages.push(p));

  // left dots
  if (siblingsStart > BOUNDARY_COUNT + 2) {
    pages.push("...");
  } else if (BOUNDARY_COUNT + 1 < totalPages - BOUNDARY_COUNT) {
    pages.push(BOUNDARY_COUNT + 1);
  }

  // middle pages
  range(siblingsStart, siblingsEnd).forEach((p) => pages.push(p));

  // right dots
  if (siblingsEnd < totalPages - BOUNDARY_COUNT - 1) {
    pages.push("...");
  } else if (totalPages - BOUNDARY_COUNT > BOUNDARY_COUNT) {
    pages.push(totalPages - BOUNDARY_COUNT);
  }

  // last pages
  endPages.forEach((p) => {
    if (!pages.includes(p)) pages.push(p);
  });

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2", className)}
    >
      {/* PREVIOUS */}
      <Button
        variant="outline"
        disabled={!canGoPrev}
        onClick={() => canGoPrev && onPageChange(page - 1)}
        aria-label="Previous page"
        className={slotClassMap[size]}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* PAGE NUMBERS */}
      {pages.map((item, i) => {
        if (item === "...") {
          return (
            <span
              key={`dots-${i}`}
              className={cn(
                "flex items-center justify-center text-muted-foreground",
                slotClassMap[size],
              )}
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          );
        }

        return (
          <Button
            key={item}
            variant={item === page ? "default" : "outline"}
            aria-current={item === page ? "page" : undefined}
            onClick={() => onPageChange(item)}
            className={cn(slotClassMap[size])}
          >
            {item}
          </Button>
        );
      })}

      {/* NEXT */}
      <Button
        variant="outline"
        disabled={!canGoNext}
        onClick={() => canGoNext && onPageChange(page + 1)}
        aria-label="Next page"
        className={slotClassMap[size]}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};
