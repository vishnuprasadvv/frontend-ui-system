import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

export type RadioSize = "sm" | "md" | "lg";
export type LabelSize = "sm" | "md" | "lg";

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  label?: React.ReactNode;
  helperText?: string;
  error?: string;
  required?: boolean;

  /** Size of radio control */
  size?: RadioSize;

  /** Top field label */
  groupLabelSize?: LabelSize;

  /** Item text */
  itemLabelSize?: LabelSize;
}

export interface RadioItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  label?: React.ReactNode;

  size?: RadioSize;
  itemLabelSize?: LabelSize;
}

/* ---------------------------------- */
/* Tokens */
/* ---------------------------------- */

const CONTROL_SIZE = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

const INDICATOR_SIZE = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
};

const GROUP_LABEL_SIZE = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const ITEM_LABEL_SIZE = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

/* ---------------------------------- */
/* Group */
/* ---------------------------------- */

export function RadioGroup({
  className,
  label,
  helperText,
  error,
  required,

  size = "md",
  groupLabelSize = "md",
  itemLabelSize = "md",

  children,
  ...props
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label
          className={cn(
            GROUP_LABEL_SIZE[groupLabelSize],
            "flex gap-1"
          )}
        >
          {label}
          {required && (
            <span className="text-destructive">*</span>
          )}
        </Label>
      )}

      <RadioGroupPrimitive.Root
        aria-invalid={!!error}
        className={cn("grid gap-3", className)}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as any, {
                size,
                itemLabelSize,
              })
            : child
        )}
      </RadioGroupPrimitive.Root>

      {error ? (
        <p className="text-xs text-destructive">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Item */
/* ---------------------------------- */

export function RadioGroupItem({
  className,
  size = "md",
  itemLabelSize = "md",
  label,
  id,
  ...props
}: RadioItemProps) {
  const itemId = id ?? React.useId();

  return (
    <div className="flex items-center gap-3">
      <RadioGroupPrimitive.Item
        id={itemId}
        className={cn(
          "relative shrink-0 rounded-full border border-input bg-background shadow-sm outline-none transition",
          "focus-visible:ring-2 focus-visible:ring-ring",
          "data-[state=checked]:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          CONTROL_SIZE[size],
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle
            className={cn(
              "fill-primary",
              INDICATOR_SIZE[size]
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {label && (
        <Label
          htmlFor={itemId}
          className={cn(
            "cursor-pointer select-none font-normal",
            ITEM_LABEL_SIZE[itemLabelSize]
          )}
        >
          {label}
        </Label>
      )}
    </div>
  );
}
