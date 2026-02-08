import * as React from "react";
import { cn } from "../../../lib/utils";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix"
> {
  label?: string;

  error?: React.ReactNode;
  helperText?: React.ReactNode;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  loading?: boolean;

  size?: InputSize;

  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;

  prefixPadding?: number;
  suffixPadding?: number;
}

const sizeMap: Record<InputSize, string> = {
  sm: "h-8 text-xs",
  md: "h-10 text-sm",
  lg: "h-12 text-base",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      messageClassName,
      type,
      label,
      error,
      helperText,
      prefix,
      suffix,
      prefixPadding = 36,
      suffixPadding = 36,
      size = "md",
      loading,
      readOnly,
      disabled,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const id = props.id ?? props.name ?? reactId;

    const message = error ?? helperText;
    const messageId = message ? `${id}-message` : undefined;

    const [showPassword, setShowPassword] = React.useState(false);

    const isPasswordInput = type === "password";
    const resolvedType = isPasswordInput && showPassword ? "text" : type;

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {/* LABEL */}
        {label && (
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

        {/* INPUT WRAPPER */}
        <div className="relative flex items-center">
          {prefix && (
            <div className="pointer-events-none absolute left-3 text-muted-foreground">
              {prefix}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={resolvedType}
            aria-invalid={!!error}
            aria-describedby={messageId}
            disabled={disabled || loading}
            readOnly={readOnly}
            style={{
              ...(prefix && {
                ["--input-pl" as any]: `${prefixPadding}px`,
              }),
              ...(suffix || isPasswordInput || loading
                ? {
                    ["--input-pr" as any]: `${suffixPadding}px`,
                  }
                : {}),
            }}
            className={cn(
              "w-full rounded-md border border-input bg-background",
              "px-2 py-2 text-foreground placeholder:text-muted-foreground",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",

              readOnly && "bg-muted/40 cursor-default",

              sizeMap[size],

              prefix && "pl-[var(--input-pl)]",
              (suffix || isPasswordInput || loading) && "pr-[var(--input-pr)]",

              error &&
                "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30",

              className,
            )}
            {...props}
          />

          {/* PASSWORD */}
          {isPasswordInput && !loading && (
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

          {/* LOADING */}
          {loading && (
            <div className="absolute right-3 animate-spin text-muted-foreground">
              <Loader2 className="h-4 w-4" />
            </div>
          )}

          {/* RIGHT ICON */}
          {suffix && !isPasswordInput && !loading && (
            <div className="pointer-events-none absolute right-3 text-muted-foreground">
              {suffix}
            </div>
          )}
        </div>

        {/* MESSAGE */}
        <p
          id={messageId}
          className={cn(
            "min-h-[1.25rem] text-sm",
            error ? "text-destructive" : "text-muted-foreground",
            !message && "invisible",
            messageClassName,
          )}
        >
          {message ?? "placeholder"}
        </p>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
