import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export interface ProgressProps {
  value: number; // 0-100
  type?: "simple" | "with-label" | "percentage-only";
}

export function ProgressBar({ value, type = "simple" }: ProgressProps) {
  if (type === "with-label") {
    return (
      <Field className="w-full max-w-sm">
        <FieldLabel htmlFor="progress-upload">
          <span>Upload progress</span>
          <span className="ml-auto">{value}%</span>
        </FieldLabel>
        <Progress
          value={value}
          id="progress-upload"
          className="h-4 rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </Field>
    );
  }

  if (type === "percentage-only") {
    return (
      <div className="w-full max-w-sm relative">
        <Progress
          value={value}
          className="h-6 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden"
        />
        <span className="absolute inset-0 flex items-center justify-center font-medium text-white">
          {value}%
        </span>
      </div>
    );
  }

  // Default: simple fancy progress bar with gradient & animation
  return (
    <Progress
      value={value}
      className="w-full max-w-sm h-4 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden
                 before:bg-gradient-to-r before:from-green-400 before:to-blue-500 before:transition-all before:duration-700"
    />
  );
}
