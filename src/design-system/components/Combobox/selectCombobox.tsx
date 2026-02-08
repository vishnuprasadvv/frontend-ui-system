import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Combobox as ShadcnCombobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox';
import { Loader2 } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export interface ComboboxOption {
  label: string;
  value: string;
}

type BaseProps = {
  label?: string;
  options: ComboboxOption[];
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: React.ReactNode;
  helperText?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;

  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  inputClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  chipClassName?: string;
};

type SingleProps = BaseProps & {
  multiple?: false | undefined;
  value?: ComboboxOption | null;
  onChange?: (value: ComboboxOption | null) => void;
  showClear?: boolean;
};

type MultiProps = BaseProps & {
  multiple: true;
  value?: ComboboxOption[] | null;
  onChange?: (value: ComboboxOption[]) => void;
  showClear?: false;
};

export type ComboboxProps = SingleProps | MultiProps;

/* -------------------------------------------------------------------------- */
/* STYLES                                                                     */
/* -------------------------------------------------------------------------- */

const SIZE_MAP = {
  sm: {
    trigger: 'min-h-8 text-xs',
    input: 'h-8 text-xs',
    chip: 'text-[10px] px-1.5 py-0',
    item: 'py-1.5 text-xs',
  },
  md: {
    trigger: 'min-h-10 text-sm',
    input: 'h-10 text-sm',
    chip: 'text-xs px-2 py-0.5',
    item: 'py-2 text-sm',
  },
  lg: {
    trigger: 'min-h-12 text-base',
    input: 'h-12 text-base',
    chip: 'text-sm px-2.5 py-1',
    item: 'py-2.5 text-base',
  },
};

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      placeholder = 'Select…',
      multiple = false,
      disabled,
      loading,
      error,
      helperText,
      size = 'md',
      side,
      sideOffset,
      align,
      alignOffset,
      required,
      showClear,
      containerClassName,
      labelClassName,
      messageClassName,
      inputClassName,
      contentClassName,
      itemClassName,
      chipClassName,
    },
    ref
  ) => {
    const anchorRef = useComboboxAnchor();
    const styles = SIZE_MAP[size];
    const reactId = React.useId();
    const id = `combobox-${reactId}`;

    const message = error ?? helperText;
    const messageId = message ? `${id}-message` : undefined;

    const handleValueChange = (val: ComboboxOption | ComboboxOption[] | null) => {
  if (multiple) {
    (onChange as (value: ComboboxOption[]) => void)?.(val as ComboboxOption[] ?? []);
  } else {
    (onChange as (value: ComboboxOption | null) => void)?.(val as ComboboxOption | null);
  }
};

    return (
      <div ref={ref} className={cn('flex flex-col gap-1', containerClassName)}>
        {/* LABEL */}
        {label && (
          <label
            htmlFor={id}
            className={cn('text-sm font-medium text-foreground', labelClassName)}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        {/* COMBOBOX */}
        <ShadcnCombobox
          items={options}
          multiple={multiple}
          value={value}
          onValueChange={handleValueChange}
          disabled={disabled || loading}
          itemToStringLabel={(item: ComboboxOption) => item?.label}
        >
          <div ref={anchorRef} className="w-full">
            {multiple ? (
              <ComboboxChips
                id={id}
                aria-invalid={!!error}
                aria-describedby={messageId}
                className={cn(
                  'flex w-full flex-wrap gap-1.5 rounded-md border bg-background px-3 py-0 transition-all',
                  'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-2 outline-none',
                  styles.trigger,
                  error &&
                    'border-destructive focus-within:border-destructive focus-within:ring-destructive/30',
                  disabled && 'opacity-50 cursor-not-allowed bg-muted/40',
                  inputClassName
                )}
              >
                <ComboboxValue>
                  {Array.isArray(value) &&
                    value.map((val: ComboboxOption) => {
                      return (
                        <ComboboxChip
                          key={val.value}
                          className={cn(
                            'bg-secondary text-secondary-foreground rounded-md border flex items-center gap-1',
                            styles.chip,
                            chipClassName
                          )}
                        >
                          {val.label}
                        </ComboboxChip>
                      );
                    })}
                </ComboboxValue>

                <ComboboxChipsInput
                  className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  placeholder={placeholder}
                />
              </ComboboxChips>
            ) : (
              <ComboboxInput
                id={id}
                aria-invalid={!!error}
                aria-describedby={messageId}
                placeholder={placeholder}
                disabled={disabled}
                showClear={showClear}
                className={cn(
                  'flex w-full rounded-md border bg-background px-0 transition-all',
                  'has-[[data-slot=input-group-control]:focus-visible]:ring-2',
                  styles.input,
                  error &&
                    'border-destructive focus:border-destructive focus:ring-destructive/30',
                  disabled && 'opacity-50 cursor-not-allowed bg-muted/40',
                  inputClassName
                )}
              />
            )}
          </div>

          <ComboboxContent
            anchor={anchorRef}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            className={cn(
              'z-50 min-w-(--anchor-width) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
              contentClassName
            )}
          >
            <ComboboxEmpty className="py-6 text-center text-sm text-muted-foreground">
              No items found.
            </ComboboxEmpty>

            <ComboboxList>
              {(val: ComboboxOption) => {
                return (
                  <ComboboxItem
                    key={val.value}
                    value={val}
                    className={cn(
                      'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50',
                      styles.item,
                      itemClassName
                    )}
                  >
                    {val?.label}
                  </ComboboxItem>
                );
              }}
            </ComboboxList>
          </ComboboxContent>
        </ShadcnCombobox>

        {/* MESSAGE */}
        <p
          id={messageId}
          className={cn(
            'min-h-5 text-sm flex items-center gap-2',
            error ? 'text-destructive' : 'text-muted-foreground',
            !message && 'invisible',
            messageClassName
          )}
        >
          {loading && <Loader2 className="h-3 w-3 animate-spin" />}
          {message ?? '\u00A0'}
        </p>
      </div>
    );
  }
);

Combobox.displayName = 'Combobox';
