import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast as sonnerToast } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/* 1. THE TOASTER (Put this in your Layout)                                   */
/* -------------------------------------------------------------------------- */

export type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-emerald-500" />,
        info: <InfoIcon className="size-4 text-blue-500" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-500" />,
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-muted-foreground self" />,
      }}
      toastOptions={{
        classNames: {
          toast: cn(
            "group !flex !w-full !items-start !gap-3 !rounded-md !border !p-4 !shadow-lg",
            "!bg-popover !text-popover-foreground !border-border"
          ),
          title: "!text-sm !font-semibold !leading-none",
          description: "!text-xs !text-muted-foreground !leading-relaxed",
          actionButton: "!bg-primary !text-primary-foreground !text-xs !font-medium !px-3 !py-1.5 !rounded-md",
          cancelButton: "!bg-muted !text-muted-foreground !text-xs !font-medium !px-3 !py-1.5 !rounded-md",
          closeButton: "!border !border-border !rounded-md !bg-background !shadow-xs !text-popover-foreground hover:!bg-accent hover:!text-accent-foreground !transition-colors",
        },
      }}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* 2. THE TOAST UTILITY (The "Custom" part for the Devs)                      */
/* -------------------------------------------------------------------------- */

/**
 * Custom wrapper to ensure consistent title/description structure
 * and to prevent "empty" toasts.
 */
export interface ToastApi {
  default: (title: string, description?: string) => string | number
  success: (title: string, description?: string) => string | number
  error: (title: string, description?: string) => string | number
  warning: (title: string, description?: string) => string | number
  info: (title: string, description?: string) => string | number
  loading: (title: string) => string | number

  action: (
    title: string,
    description: string,
    label: string,
    onClick: () => void
  ) => string | number

  dismiss: (id?: string | number) => void

  promise: (
    promise: Promise<unknown>,
    options: Parameters<typeof sonnerToast.promise>[1]
  ) => unknown
}

export const toast: ToastApi = {
  default: (title: string, description?: string) =>
    sonnerToast(title, { description }),

  success: (title: string, description?: string) =>
    sonnerToast.success(title, { description }),

  error: (title: string, description?: string) =>
    sonnerToast.error(title, { description }),

  warning: (title: string, description?: string) =>
    sonnerToast.warning(title, { description }),

  info: (title: string, description?: string) =>
    sonnerToast.info(title, { description }),

  loading: (title: string) =>
    sonnerToast.loading(title),

  action: (title, description, label, onClick) =>
    sonnerToast(title, {
      description,
      action: { label, onClick },
    }),

  dismiss: (id) => sonnerToast.dismiss(id),

  promise: (promise, options) =>
    sonnerToast.promise(promise, options),
}

export { Toaster }