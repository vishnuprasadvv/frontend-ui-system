// components/design-system/Table/Table.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'bordered' | 'minimal';

interface TableProps extends React.ComponentProps<'table'> {
  // Layout & Container
  wrapperClassName?: string;
  containerClassName?: string;

  // Variants & Sizes
  size?: TableSize;
  variant?: TableVariant;

  // Features
  stickyHeader?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;

  // Content
  caption?: string;
  emptyMessage?: string;
  loading?: boolean;
  isEmpty?:boolean;
}

interface TableCellProps extends React.ComponentProps<'td'> {
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
}

interface TableHeadProps extends React.ComponentProps<'th'> {
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sorted?: 'asc' | 'desc' | false;
  onSort?: () => void;
}

/* -------------------------------------------------------------------------- */
/* STYLE MAPS                                                                 */
/* -------------------------------------------------------------------------- */

const sizeMap: Record<TableSize, { cell: string; head: string }> = {
  sm: {
    cell: 'px-3 py-1.5 text-xs',
    head: 'px-3 py-2 text-xs h-8',
  },
  md: {
    cell: 'px-4 py-2.5 text-sm',
    head: 'px-4 py-3 text-sm h-10',
  },
  lg: {
    cell: 'px-6 py-4 text-base',
    head: 'px-6 py-4 text-base h-12',
  },
};

const variantMap: Record<TableVariant, string> = {
  default: 'border border-border',
  bordered: 'border-2 border-border',
  minimal: 'border-0',
};

/* -------------------------------------------------------------------------- */
/* CONTEXT FOR SIZE                                                           */
/* -------------------------------------------------------------------------- */

const TableContext = React.createContext<{
  size: TableSize;
  stickyHeader: boolean;
}>({
  size: 'md',
  stickyHeader: false,
});

const useTableContext = () => React.useContext(TableContext);

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

function Table({
  className,
  wrapperClassName,
  stickyHeader = false,
  striped = false,
  hoverable = true,
  bordered = false,
  size = 'md',
  variant = 'default',
  caption,
  emptyMessage,
  isEmpty,
  loading,
  children,
  ...props
}: TableProps) {

  return (
    <TableContext.Provider value={{ size, stickyHeader }}>
      <div data-slot="table-wrapper" className={cn('relative w-full', wrapperClassName)}>
        <div
          data-slot="table-container"
          className={cn(
            'relative w-full overflow-auto rounded-lg bg-background',
            stickyHeader && 'max-h-[600px]', // Add max height for sticky to work
            variantMap[variant]
          )}
        >
          <table
            data-slot="table"
            data-hoverable={hoverable}
            data-bordered={bordered}
            className={cn(
              'w-full caption-bottom',
              // Zebra stripes
              striped && '[&_tbody_tr:nth-child(odd)]:bg-muted/30',
              // All borders
              bordered && '[&_td]:border [&_th]:border',
              className
            )}
            {...props}
          >
            {caption && <TableCaption>{caption}</TableCaption>}
            {children}
          </table>

          {/* Loading State */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="animate-spin text-muted-foreground">
                  <Loader2 className="h-4 w-4" />
                </div>
                Loading...
              </div>
            </div>
          )}

          {/* Empty State */}
          {emptyMessage && !loading && isEmpty && (
            <div className="py-12 text-center text-sm text-muted-foreground">
              {emptyMessage}
            </div>
          )}
        </div>
      </div>
    </TableContext.Provider>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  const { stickyHeader } = useTableContext();

  return (
    <thead
      data-slot="table-header"
      className={cn(
        'bg-muted [&_tr]:border-b',
        stickyHeader && 'sticky top-0 z-10 shadow-sm',
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}

function TableRow({
  className,
  clickable,
  ...props
}: React.ComponentProps<'tr'> & { clickable?: boolean }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b transition-colors',
        'data-[state=selected]:bg-muted',
        'in-data-[hoverable=true]:hover:bg-muted/50',
        clickable && 'cursor-pointer',
        className
      )}
      {...props}
    />
  );
}

function TableHead({
  className,
  align = 'left',
  sortable = false,
  sorted = false,
  onSort,
  children,
  ...props
}: TableHeadProps) {
  const { size } = useTableContext();
  const styles = sizeMap[size];

  const content = (
    <>
      {children}
      {sortable && (
        <span className="ml-2 inline-flex flex-col">
          <svg
            className={cn(
              'h-3 w-3 transition-colors',
              sorted === 'asc' ? 'text-foreground' : 'text-muted-foreground'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" />
          </svg>
          <svg
            className={cn(
              'h-3 w-3 -mt-1 transition-colors',
              sorted === 'desc' ? 'text-foreground' : 'text-muted-foreground'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" />
          </svg>
        </span>
      )}
    </>
  );

  return (
    <th
      data-slot="table-head"
      onClick={sortable ? onSort : undefined}
      className={cn(
        'align-middle font-semibold text-foreground whitespace-nowrap',
        styles.head,
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        sortable && 'cursor-pointer select-none hover:bg-muted/70',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex items-center gap-2',
          align === 'center' && 'justify-center',
          align === 'right' && 'justify-end'
        )}
      >
        {content}
      </div>
    </th>
  );
}

function TableCell({
  className,
  align = 'left',
  truncate = false,
  ...props
}: TableCellProps) {
  const { size } = useTableContext();
  const styles = sizeMap[size];

  return (
    <td
      data-slot="table-cell"
      className={cn(
        'align-middle',
        styles.cell,
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        truncate ? 'truncate max-w-xs' : 'whitespace-nowrap',
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption,
};
