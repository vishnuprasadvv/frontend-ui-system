import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
}

/* ---------------------------------- */
/* Size tokens */
/* ---------------------------------- */

const SIZE_CLASSES = {
  sm: {
    root: "h-5 w-9 p-[1.55px] rounded-md",
    thumb: "h-full aspect-square translate-x-[0.8px] data-[state=checked]:translate-x-[16px] rounded-[calc(var(--radius-md)-1.55px)]",
  },
  md: {
    root: "h-6 w-11 p-[2px] rounded-md",
    thumb: "h-full -translate-y-[0.4px] translate-x-[0.5px] aspect-square data-[state=checked]:translate-x-[20px] rounded-[calc(var(--radius-md)-2px)]",
  },
  lg: {
    root: "h-7 w-14 p-[3px] rounded-md",
    thumb: "h-full aspect-square data-[state=checked]:translate-x-[27.5px] rounded-[calc(var(--radius-md)-3px)]",
  },
};

/* ---------------------------------- */

export function Switch({
  label,
  helperText,
  error,
  required,
  size = "md",
  disabled,
  className,
  ...props
}: SwitchProps) {
  const id = React.useId();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <SwitchPrimitive.Root
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          aria-required={required}
          className={cn(
            "peer inline-flex shrink-0 cursor-pointer items-center border border-input bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
            SIZE_CLASSES[size].root,
            className
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "pointer-events-none block bg-background shadow transition-transform",
              SIZE_CLASSES[size].thumb
            )}
          />
        </SwitchPrimitive.Root>

        {label && (
          <label htmlFor={id} className="text-sm font-medium">
            {label}
            {required && (
              <span className="ml-0.5 text-destructive">*</span>
            )}
          </label>
        )}
      </div>

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
