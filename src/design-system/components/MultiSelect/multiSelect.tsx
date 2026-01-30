import * as React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip } from '../Tooltip';

export interface MultiSelectProps {
  label?: string;

  value: string[];

  onChange: (value: string[]) => void;

  options: {
    label: string;
    value: string;
  }[];

  placeholder?: string;

  required?: boolean;

  error?: string;
  helperText?: string;

  size?: 'sm' | 'md' | 'lg';
}

/* ---------------------------------- */
/* Size tokens */
/* ---------------------------------- */

const SIZE_CLASSES = {
  sm: 'h-8 text-sm px-3',
  md: 'h-10 text-sm px-4',
  lg: 'h-12 text-base px-5',
} as const;

const ITEM_SIZE_CLASSES = {
  sm: 'py-1.5 text-sm',
  md: 'py-2 text-sm',
  lg: 'py-2.5 text-base',
} as const;

/* ---------------------------------- */

export function MultiSelect({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select options',
  required,
  error,
  helperText,
  size = 'md',
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const selectedLabels = options
    .filter((o) => value.includes(o.value))
    .map((o) => o.label)
    .join(', ');

  const id = React.useId();

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && (
            <span className="ml-0.5 text-destructive" aria-hidden>
              *
            </span>
          )}
        </label>
      )}

      {/* ---------------- Trigger ---------------- */}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            id={id}
            aria-labelledby={label ? id : undefined}
            aria-label={!label ? placeholder : undefined}
            aria-expanded={open}
            aria-invalid={!!error}
            className={cn(
              'flex w-full items-center justify-between overflow-hidden min-w-0',
              SIZE_CLASSES[size],
              error && 'border-destructive'
            )}
          >
            {/* Truncated value */}
            <Tooltip content={selectedLabels || placeholder} delayDuration={500}>
              <span
                className={cn(
                  'block max-w-full truncate text-left font-normal text-foreground',
                  !selectedLabels && 'text-muted-foreground'
                )}
              >
                {selectedLabels || placeholder}
              </span>
            </Tooltip>

            <ChevronDown className="ml-2 size-4 shrink-0 opacity-60 text-muted-foreground" />
          </Button>
        </PopoverTrigger>

        {/* ---------------- Content ---------------- */}

        <PopoverContent
          align="center"
          className="p-0 w-[-radix--popover-trigger-width]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div role="listbox">
            {options.map((opt) => {
              const selected = value.includes(opt.value);

              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={selected}
                  tabIndex={0}
                  onClick={() => {
                    onChange(
                      selected
                        ? value.filter((v) => v !== opt.value)
                        : [...value, opt.value]
                    );
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onChange(
                        selected
                          ? value.filter((v) => v !== opt.value)
                          : [...value, opt.value]
                      );
                    }
                  }}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 px-3 hover:bg-accent focus-visible:bg-accent outline-none',
                    ITEM_SIZE_CLASSES[size]
                  )}
                >
                  <Check
                    className={cn(
                      'size-4 shrink-0',
                      selected ? 'opacity-100' : 'opacity-0'
                    )}
                  />

                  <span className="flex-1">{opt.label}</span>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>

      {/* ---------------- Footer ---------------- */}

      {error && <p className="text-xs text-destructive">{error}</p>}

      {!error && helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
