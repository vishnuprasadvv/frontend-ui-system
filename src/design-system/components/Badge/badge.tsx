import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit whitespace-nowrap shrink-0 gap-1.5",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/30 text-primary hover:bg-primary/40",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground border-input hover:bg-accent hover:text-accent-foreground",
        destructive:
          "border-transparent bg-destructive/30 text-destructive hover:bg-destructive/40",
        success: "border-transparent bg-success/30 text-success hover:bg-success/40",
        warning: "border-transparent bg-warning/30 text-warning hover:bg-warning/40",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px] [&>svg]:size-3",
        md: "px-2.5 py-0.5 text-xs [&>svg]:size-3.5",
        lg: "px-3 py-1 text-sm [&>svg]:size-4",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "pill",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  showDot?: boolean
  onRemove?: () => void
}

function Badge({
  className,
  variant,
  size,
  shape,
  showDot = false,
  onRemove,
  children,
  ...props
}: BadgeProps) {

  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, shape }), className)}
      {...props}
    >
      {showDot && (
        <span 
          className={cn(
            "size-1.5 rounded-full bg-current mr-1"
          )} 
        />
      )}
      {children}
      {onRemove && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="ml-1 -mr-1 rounded-lg p-0.5 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
        >
          <X className="size-3" />
          <span className="sr-only">Remove</span>
        </button>
      )}
    </span>
  )
}

export { Badge, badgeVariants }