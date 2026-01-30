import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react"; // Standard Shadcn/Lucide icon

export type ProgressVariant = "primary" | "success" | "warning" | "error" | "neutral";
export type ProgressSize = "xs" | "sm" | "md" | "lg";

export interface ProgressBarProps {
  value?: number;
  type?: "simple" | "with-label" | "percentage-only";
  variant?: ProgressVariant;
  size?: ProgressSize;
  loading?: boolean;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

const INDICATOR_VARIANTS: Record<ProgressVariant, string> = {
  primary: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-400",
  error: "bg-destructive",
  neutral: "bg-slate-500",
};

const SIZE_CLASSES: Record<ProgressSize, string> = {
  xs: "h-1 rounded-xs",
  sm: "h-2 rounded-sm",
  md: "h-4 rounded-md",
  lg: "h-6 rounded-lg",
};

export function ProgressBar({
  value = 0,
  type = "simple",
  variant = "primary",
  size = "md",
  loading = false,
  label = "Progress",
  ariaLabel,
  className,
}: ProgressBarProps) {
  const generatedId = React.useId();
  const labelId = `${generatedId}-label`;
  const safeValue = Math.min(100, Math.max(0, value));

  const indicatorClass = INDICATOR_VARIANTS[variant];
  const heightClass = SIZE_CLASSES[size];

  const loadingClasses = loading 
    ? "animate-pulse opacity-80 overflow-hidden relative after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_2s_infinite]" 
    : "";

  const a11yProps = {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": loading ? undefined : safeValue,
    ...(ariaLabel ? { "aria-label": ariaLabel } : { "aria-labelledby": labelId }),
    "aria-valuetext": loading ? "Loading..." : `${safeValue}%`,
    title: ariaLabel || label,
  };

  /* ---------------- WITH LABEL & PERCENTAGE ONLY ---------------- */
  if (type === "with-label" || type === "percentage-only") {
    return (
      <div className={cn("w-full max-w-sm")}>
        <div className={cn(
          "flex items-end mb-1.5 px-0.5 min-h-[20px]",
          type === "with-label" ? "justify-between" : "justify-end"
        )}>
          {type === "with-label" && (
            <span id={labelId} className="text-sm font-semibold tracking-tight">
              {label}
            </span>
          )}
          
          <div className="flex items-center">
            {loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-zinc-500" />
            ) : (
              <span 
                id={type === "percentage-only" ? labelId : undefined} 
                className="text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400"
              >
                {safeValue}%
              </span>
            )}
          </div>
        </div>
        <Progress
          value={loading ? undefined : safeValue}
          {...a11yProps}
          indicatorClassName={cn(indicatorClass, loadingClasses)}
          className={cn(heightClass, "bg-muted", className)}
        />
      </div>
    );
  }

  /* ---------------- SIMPLE ---------------- */
  return (
    <Progress
      value={loading ? undefined : safeValue}
      {...a11yProps}
      aria-label={ariaLabel || label} 
      indicatorClassName={cn(indicatorClass, loadingClasses)}
      className={cn("w-full max-w-sm bg-muted", heightClass, className)}
    />
  );
}