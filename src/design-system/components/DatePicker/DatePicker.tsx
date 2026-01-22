import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";

export type Mode = "single" | "range" | "multiple";

export type DatePickerProps = {
  mode?: Mode;
  disablePastDates?: boolean;
  minDate?: Date;
  maxDate?: Date;
  label: string;
  onChange?: (date: Date | Date[] | DateRange | undefined) => void;
  defaultValue?: Date | Date[] | DateRange;
};

export function DatePicker({
  mode = "single",
  disablePastDates = false,
  minDate = new Date(2000, 0, 1),
  maxDate = new Date(2050, 11, 31),
  label,
  onChange,
  defaultValue,
}: DatePickerProps) {
  const [rangeValue, setRangeValue] = React.useState<DateRange | undefined>(
    mode === "range" &&
      typeof defaultValue === "object" &&
      "from" in defaultValue
      ? defaultValue
      : { from: undefined, to: undefined }
  );

  const [singleValue, setSingleValue] = React.useState<Date | undefined>(
    mode === "single" && defaultValue instanceof Date ? defaultValue : undefined
  );

  const [multiValue, setMultiValue] = React.useState<Date[]>(
    Array.isArray(defaultValue) ? defaultValue : []
  );

  const [visibleMonth, setVisibleMonth] = React.useState(new Date());

  const years = Array.from(
    { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
    (_, i) => minDate.getFullYear() + i
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (month: string) => {
    const newMonthIndex = months.indexOf(month);
    const updated = new Date(visibleMonth);
    updated.setMonth(newMonthIndex);
    setVisibleMonth(updated);
  };

  const handleYearChange = (year: string) => {
    const updated = new Date(visibleMonth);
    updated.setFullYear(Number(year));
    setVisibleMonth(updated);
  };

  const handleDateChange = (value: Date | Date[] | DateRange | undefined) => {
    if (mode === "range") {
      setRangeValue(value as DateRange);
    } else if (mode === "single") {
      setSingleValue(value as Date);
    } else {
      setMultiValue(value as Date[]);
    }
    onChange?.(value);
  };

  const renderLabel = () => {
    if (mode === "range") {
      if (rangeValue?.from && rangeValue.to) {
        return `${format(rangeValue.from, "MMM dd")} - ${format(rangeValue.to, "MMM dd")}`;
      } else if (rangeValue?.from) {
        return format(rangeValue.from, "MMM dd");
      }
    } else if (mode === "single") {
      return singleValue ? format(singleValue, "MMM dd, yyyy") : label;
    } else if (mode === "multiple") {
      return multiValue.length > 0
        ? multiValue.map((d) => format(d, "MMM dd")).join(", ")
        : label;
    }
    return label;
  };

  return (
    <div className="grid gap-2">
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "max-w-[200px] overflow-hidden text-ellipsis truncate whitespace-nowrap justify-start text-left font-normal h-10 px-6 bg-white border-gray-200 rounded-full",
                  ((mode === "range" && !rangeValue?.from) ||
                    (mode === "single" && !singleValue) ||
                    (mode === "multiple" && multiValue.length === 0)) &&
                    "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{renderLabel()}</span>
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent className="flex-nowrap">
            {renderLabel()}
          </TooltipContent>
        </Tooltip>

        <PopoverContent className="w-auto p-4" align="start">
          <div className="flex flex-row justify-between gap-2 mb-4">
            <Select
              onValueChange={handleMonthChange}
              defaultValue={months[visibleMonth.getMonth()]}
            >
              <SelectTrigger className="w-[130px] h-9">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={handleYearChange}
              defaultValue={visibleMonth.getFullYear().toString()}
            >
              <SelectTrigger className="w-[100px] h-9">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {mode === "range" ? (
            <Calendar
              mode="range"
              selected={rangeValue}
              onSelect={handleDateChange}
              numberOfMonths={1}
              required={false} // required is valid only for range mode
              initialFocus
              defaultMonth={visibleMonth}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              disabled={{
                before: disablePastDates ? new Date() : minDate,
                after: maxDate,
              }}
            />
          ) : mode === "multiple" ? (
            <Calendar
              mode="multiple"
              selected={multiValue}
              onSelect={handleDateChange}
              numberOfMonths={1}
              initialFocus
              defaultMonth={visibleMonth}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              disabled={{
                before: disablePastDates ? new Date() : minDate,
                after: maxDate,
              }}
            />
          ) : (
            <Calendar
              mode="single"
              selected={singleValue}
              onSelect={handleDateChange}
              numberOfMonths={1}
              initialFocus
              defaultMonth={visibleMonth}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              disabled={{
                before: disablePastDates ? new Date() : minDate,
                after: maxDate,
              }}
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
