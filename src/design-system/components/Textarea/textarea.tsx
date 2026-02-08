import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: React.ReactNode;
  helperText?: React.ReactNode;
  size?: TextareaSize;
  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  required?: boolean;
}

const sizeMap: Record<TextareaSize, string> = {
  sm: "text-xs min-h-12",
  md: "text-sm min-h-20",
  lg: "text-base min-h-32",
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      messageClassName,
      label,
      error,
      helperText,
      size = "md",
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const id = props.id ?? reactId;

    const message = error ?? helperText;
    const messageId = message ? `${id}-message` : undefined;

    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        {/* LABEL */}
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium text-foreground flex gap-1",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-destructive">*</span>}
          </label>
        )}

        {/* TEXTAREA */}
        <textarea
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={messageId}
          disabled={disabled}
          className={cn(
            "flex w-full rounded-md border border-input bg-background px-3 py-2 transition-all",
            "placeholder:text-muted-foreground outline-none",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "field-sizing-content",
            error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30",
            sizeMap[size],
            className
          )}
          {...props}
        />

        {/* FEEDBACK MESSAGE */}
        <p
          id={messageId}
          className={cn(
            "min-h-5 text-sm",
            error ? "text-destructive" : "text-muted-foreground",
            !message && "invisible",
            messageClassName
          )}
        >
          {message ?? "\u00A0"}
        </p>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };