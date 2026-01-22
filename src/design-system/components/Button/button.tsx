import * as React from "react";
import { Button as ShadButton, type ButtonProps as ShadButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ShadButtonProps {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, isLoading, leftIcon, rightIcon, disabled, ...props },
    ref
  ) => {
    return (
      <ShadButton
        ref={ref}
        className={cn("relative gap-2 transition-all active:scale-95", className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin shrink-0" />}

        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0">{leftIcon}</span>
        )}

        <span className="truncate">{children}</span>

        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </ShadButton>
    );
  }
);

Button.displayName = "Button";
