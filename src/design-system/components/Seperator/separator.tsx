import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

export interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  variant?: "solid" | "dashed" | "dotted"
  label?: React.ReactNode
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "solid",
  label,
  ...props
}: SeparatorProps) {
  const isHorizontal = orientation === "horizontal"

  return (
    <div className={cn("relative flex items-center w-full", isHorizontal ? "flex-row" : "flex-col h-full")}>
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "bg-border shrink-0 transition-all",
          // Base thickness/size logic
          isHorizontal ? "h-px w-full" : "h-full w-px",
          // Variant logic
          variant === "dashed" && "bg-transparent border-dashed border-border",
          variant === "dotted" && "bg-transparent border-dotted border-border",
          isHorizontal && variant !== "solid" && "border-t",
          !isHorizontal && variant !== "solid" && "border-l",
          className
        )}
        {...props}
      />
      
      {/* Optional Label (Only for Horizontal) */}
      {label && isHorizontal && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2">
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

export { Separator }