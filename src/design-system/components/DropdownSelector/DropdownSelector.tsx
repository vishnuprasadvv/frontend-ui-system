import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Option = {
  label: string;
  value: string;
};

export interface DropdownSelectorProps {
  value?: string;
  onChange: (value: string) => void;
  options: Option[];

  placeholder?: string;

  disabled?: boolean;

  size?: "sm" | "md" | "lg";

  className?: string;
  contentClassName?: string;
}

const sizeMap = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  disabled = false,
  size = "md",
  className,
  contentClassName,
}) => {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          disabled={disabled}
          aria-label={placeholder}
          className={cn(
            "min-w-[10rem] justify-between",
            sizeMap[size],
            className,
          )}
        >
          <span className="truncate">
            {selectedLabel || placeholder}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className={cn("w-48", contentClassName)}
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => onChange(option.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            {option.label}

            {value === option.value && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
