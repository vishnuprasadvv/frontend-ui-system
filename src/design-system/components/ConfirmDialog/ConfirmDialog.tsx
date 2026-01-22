import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/design-system/components/Button/button";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface ConfirmationDialogProps {
  open: boolean;
  title?: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => Promise<void> | void;
  onCancel?: () => void;
  isCancelButtonVisible?: boolean;
  isShowCloseButton?: boolean;
  icon?: ReactNode;
  titleAlignment?: "center" | "left" | "right";
}

export function ConfirmationDialog({
  open,
  title = "Are you sure?",
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isCancelButtonVisible = true,
  isShowCloseButton = false,
  icon,
  titleAlignment = "center",
}: ConfirmationDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent
        className="sm:max-w-md w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        showCloseButton={isShowCloseButton}
      >
        <DialogHeader className="text-center">
          {icon && <div className="flex justify-center mb-2">{icon}</div>}
          <DialogTitle
            className={cn("text-2xl font-semibold mb-1", {
              "text-left": titleAlignment === "left",
              "text-center": titleAlignment === "center",
              "text-right": titleAlignment === "right",
            })}
          >
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription
              className={cn("text-sm text-muted-foreground", {
                "text-left": titleAlignment === "left",
                "text-center": titleAlignment === "center",
                "text-right": titleAlignment === "right",
              })}
            >
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="flex gap-2 pt-4">
          {isCancelButtonVisible && (
            <Button
              variant="outline"
              className="flex-1"
              onClick={onCancel}
              disabled={loading}
            >
              {cancelText}
            </Button>
          )}
          <Button
            className="flex-1"
            onClick={handleConfirm}
            disabled={loading}
            isLoading={loading}
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
