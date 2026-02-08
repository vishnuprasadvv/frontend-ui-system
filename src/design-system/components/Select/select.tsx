import {
  Select as SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;

  value?: string;
  onChange: (value: string) => void;

  options: SelectOption[];

  placeholder?: string;

  disabled?: boolean;
  required?: boolean;

  size?: 'sm' | 'md' | 'lg';

  error?: string;
  helperText?: string;

  className?: string;
}

const sizeMap = {
  sm: 'h-8 min-h-8 text-xs px-2',
  md: 'h-10 min-h-10 text-sm px-3',
  lg: 'h-12 min-h-12 text-base px-4',
};

const itemSizeMap = {
  sm: 'py-1.5 text-xs',
  md: 'py-2 text-sm',
  lg: 'py-2.5 text-base',
};

export const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  disabled,
  required = true,
  size = 'md',
  error,
  helperText,
  className,
}: SelectProps) => {
  const id = `select-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label htmlFor={id} className={cn('text-sm font-medium text-foreground')}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      <SelectRoot value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          id={id}
          aria-invalid={!!error}
          aria-required={required}
          aria-label={label ?? placeholder}
          className={cn(
            'flex items-center justify-between w-full overflow-hidden hover:bg-accent',
            sizeMap[size],
            error && 'border-destructive focus:ring-destructive',
            className
          )}
        >
          <div className="flex-1 min-w-0 overflow-hidden text-start truncate">
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>

        <SelectContent position="popper">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={itemSizeMap[size]}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      {/* FOOTER TEXT */}

      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : (
        helperText && <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
};
