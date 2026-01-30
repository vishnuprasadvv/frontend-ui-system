import * as React from "react";
import { Checkbox as RootCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface CheckboxProps {
  id?: string;

  label?: string;

  checked?: boolean;
  defaultChecked?: boolean;

  onCheckedChange?: (checked: boolean) => void;

  disabled?: boolean;
  required?: boolean;

  error?: string;
  helperText?: string;

  size?: "sm" | "md" | "lg";

  className?: string;
}

/* ---------------------------------- */
/* Size tokens */
/* ---------------------------------- */

const SIZE_MAP = {
  sm: "scale-90",
  md: "scale-100",
  lg: "scale-110",
} as const;

const LABEL_SIZE_MAP = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
} as const;

/* ---------------------------------- */

export function Checkbox({
  id,
  label,

  checked,
  defaultChecked,
  onCheckedChange,

  disabled,
  required,

  error,
  helperText,

  size = "md",

  className,
}: CheckboxProps) {
  const autoId = React.useId();
  const checkboxId = id ?? autoId;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {/* Row */}
      <div className="flex items-center gap-2">
        <RootCheckbox
          id={checkboxId}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-required={required}
          className={cn(
            SIZE_MAP[size],
            "hover:bg-accent cursor-pointer",
            error && "border-destructive focus-visible:ring-destructive"
          )}
        />

        {label && (
          <Label
            htmlFor={checkboxId}
            className={cn(
              "select-none cursor-pointer",
              LABEL_SIZE_MAP[size],
              disabled && "opacity-50",
              error && "text-destructive"
            )}
          >
            {label}
            {required && (
              <span className="ml-0.5 text-destructive">*</span>
            )}
          </Label>
        )}
      </div>

      {/* Footer text */}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : (
        helperText && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )
      )}
    </div>
  );
}
