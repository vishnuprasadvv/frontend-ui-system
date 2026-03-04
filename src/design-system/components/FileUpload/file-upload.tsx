import * as React from "react";
import { cn } from "../../../lib/utils";
import { Upload, X, File as FileIcon } from "lucide-react";

export type FileUploadSize = "sm" | "md" | "lg";

export interface FileUploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange" | "size" | "value"
  > {
  label?: React.ReactNode;

  error?: React.ReactNode;
  helperText?: React.ReactNode;

  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in bytes

  size?: FileUploadSize;

  value?: File[];
  onChange?: (files: File[]) => void;

  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
}

const sizeMap: Record<FileUploadSize, string> = {
  sm: "p-3 text-xs",
  md: "p-5 text-sm",
  lg: "p-6 text-base",
};

export const FileUpload = React.forwardRef<
  HTMLInputElement,
  FileUploadProps
>(
  (
    {
      label,
      error,
      helperText,
      multiple = false,
      maxFiles,
      maxSize,
      size = "md",

      value,
      onChange,

      disabled,
      accept,

      containerClassName,
      labelClassName,
      messageClassName,

      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const reactId = React.useId();
    const id = props.id ?? props.name ?? reactId;

    const isControlled = value !== undefined;
    const [internalFiles, setInternalFiles] = React.useState<File[]>([]);

    const files = isControlled ? value : internalFiles;

    const setFiles = (newFiles: File[]) => {
      if (!isControlled) setInternalFiles(newFiles);
      onChange?.(newFiles);
    };

    /* -------------------- */
    /* Validation */
    /* -------------------- */

    const validateFiles = (incoming: File[]) => {
      let validated = incoming;

      if (maxSize) {
        validated = validated.filter((f) => f.size <= maxSize);
      }

      if (maxFiles) {
        validated = validated.slice(0, maxFiles);
      }

      return validated;
    };

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList) return;

      const incoming = Array.from(fileList);

      const validated = validateFiles(
        multiple ? [...files, ...incoming] : incoming,
      );

      setFiles(validated);
    };

    const handleRemove = (index: number) => {
      const updated = files.filter((_, i) => i !== index);
      setFiles(updated);
    };

    /* -------------------- */
    /* Drag state */
    /* -------------------- */

    const [dragActive, setDragActive] = React.useState(false);

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      if (disabled) return;
      setDragActive(false);
      handleFiles(e.dataTransfer.files);
    };

    const message = error ?? helperText;
    const messageId = message ? `${id}-message` : undefined;

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

        {/* DROP ZONE */}
        <div
          onClick={() => !disabled && inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            if (!disabled) setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          aria-invalid={!!error}
          aria-describedby={messageId}
          className={cn(
            "relative flex flex-col items-center justify-center rounded-md border-2 border-dashed transition-colors",
            "border-input bg-background text-muted-foreground",
            "cursor-pointer",

            sizeMap[size],

            dragActive && "border-primary bg-primary/5 text-primary",
            error && "border-destructive text-destructive",
            disabled && "cursor-not-allowed opacity-50",

            className,
          )}
        >
          <Upload className="mb-2 h-5 w-5" />
          <span>Drag & drop or click to upload</span>

          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as any).current = node;
            }}
            id={id}
            type="file"
            multiple={multiple}
            accept={accept}
            disabled={disabled}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {/* FILE LIST */}
        {files.length > 0 && (
          <div className="mt-2 flex flex-col gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate text-sm">
                    {file.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  disabled={disabled}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* MESSAGE */}
        <p
          id={messageId}
          className={cn(
            "min-h-5 text-sm",
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

FileUpload.displayName = "FileUpload";