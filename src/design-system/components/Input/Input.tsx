import * as React from "react";
import { cn } from "../../../lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  leftIconPadding?: number;
  rightIconPadding?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      errorClassName,
      type,
      label,
      error,
      leftIcon,
      rightIcon,
      leftIconPadding = 36,
      rightIconPadding = 36,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const id = props.id ?? props.name ?? reactId;
    const errorId = error ? `${id}-error` : undefined;

    const [showPassword, setShowPassword] = React.useState(false);

    const isPasswordInput = type === "password";
    const resolvedType = isPasswordInput && showPassword ? "text" : type;

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {label && id && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium text-foreground",
              labelClassName,
            )}
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={resolvedType}
            aria-invalid={!!error}
            aria-describedby={errorId}
            style={{
              ...(leftIcon && {
                ["--input-pl" as any]: `${leftIconPadding}px`,
              }),
              ...(rightIcon || isPasswordInput
                ? {
                    ["--input-pr" as any]: `${rightIconPadding}px`,
                  }
                : {}),
            }}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background",
              "px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary/50",
              // "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
              // "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:border-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-[var(--input-pl)]",
              (rightIcon || isPasswordInput) && "pr-[var(--input-pr)]",
              error && "border-destructive focus-visible:ring-destructive/30 focus-visible:outline-2 focus-visible:outline-destructive/50",
              className,
            )}
            {...props}
          />

          {rightIcon && !isPasswordInput && (
            <div className="pointer-events-none absolute right-3 text-muted-foreground">
              {rightIcon}
            </div>
          )}

          {isPasswordInput && (
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
        </div>

        <p
  id={errorId}
  className={cn(
    "min-h-[1.25rem] text-sm",
    error ? "text-destructive" : "invisible",
    errorClassName,
  )}
>
  {error ?? "placeholder"}
</p>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
