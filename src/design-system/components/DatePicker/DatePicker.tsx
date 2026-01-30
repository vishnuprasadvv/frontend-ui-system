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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type BaseProps = {
  placeholder: string;

  disablePastDates?: boolean;
  minDate?: Date;
  maxDate?: Date;

  disabled?: boolean;
  showTooltip?: boolean;

  className?: string;
  triggerClassName?: string;
};

/* ---- MODE VARIANTS ---- */

export type DatePickerProps =
  | (BaseProps & {
      mode?: "single";
      value?: Date;
      defaultValue?: Date;
      onChange?: (date: Date | undefined) => void;
    })
  | (BaseProps & {
      mode: "multiple";
      value?: Date[];
      defaultValue?: Date[];
      onChange?: (date: Date[] | undefined) => void;
    })
  | (BaseProps & {
      mode: "range";
      value?: DateRange;
      defaultValue?: DateRange;
      onChange?: (date: DateRange | undefined) => void;
    });

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export function DatePicker(props: DatePickerProps) {
  const {
    placeholder,
    disablePastDates = false,
    minDate = new Date(2000, 0, 1),
    maxDate = new Date(2050, 11, 31),
    disabled,
    showTooltip = true,
    className,
    triggerClassName,
  } = props;

  const mode = props.mode ?? "single";

  const isControlled = props.value !== undefined;

  const months = React.useMemo(
    () => [
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
    ],
    [],
  );

  /* ---------------------------------------------------------------------- */
  /*                                  STATE                                 */
  /* ---------------------------------------------------------------------- */

  const [singleValue, setSingleValue] = React.useState<Date>();
  const [multiValue, setMultiValue] = React.useState<Date[]>([]);
  const [rangeValue, setRangeValue] = React.useState<DateRange>();

  const [visibleMonth, setVisibleMonth] = React.useState<Date>(new Date());

  /* --------------------- SYNC VALUE / MODE --------------------- */

  React.useEffect(() => {
    const src = isControlled ? props.value : props.defaultValue;

    if (mode === "single") {
      setSingleValue(src instanceof Date ? src : undefined);
    }

    if (mode === "multiple") {
      setMultiValue(Array.isArray(src) ? src : []);
    }

    if (mode === "range") {
      setRangeValue(
        src && typeof src === "object" && "from" in src
          ? (src as DateRange)
          : undefined,
      );
    }

    if (src instanceof Date) {
      setVisibleMonth(src);
    }

    if (Array.isArray(src) && src[0] instanceof Date) {
      setVisibleMonth(src[0]);
    }

    if (src && typeof src === "object" && "from" in src && src.from) {
      setVisibleMonth(src.from);
    }
  }, [props.value, props.defaultValue, mode, isControlled]);

  /* ---------------------------------------------------------------------- */
  /*                                   YEARS                                */
  /* ---------------------------------------------------------------------- */

  const years = React.useMemo(
    () =>
      Array.from(
        { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
        (_, i) => minDate.getFullYear() + i,
      ),
    [minDate, maxDate],
  );

  /* ---------------------------------------------------------------------- */
  /*                                 HANDLERS                               */
  /* ---------------------------------------------------------------------- */

  const handleMonthChange = (month: string) => {
    const updated = new Date(visibleMonth);
    updated.setMonth(months.indexOf(month));
    setVisibleMonth(updated);
  };

  const handleYearChange = (year: string) => {
    const updated = new Date(visibleMonth);
    updated.setFullYear(Number(year));
    setVisibleMonth(updated);
  };

  const handleDateChange = (val: Date | Date[] | DateRange | undefined) => {
    if (!isControlled) {
      if (mode === "single") setSingleValue(val as Date);
      if (mode === "multiple") setMultiValue(val as Date[]);
      if (mode === "range") setRangeValue(val as DateRange);
    }

    props.onChange?.(val as any);
  };

  /* ---------------------------------------------------------------------- */
  /*                                   LABEL                                */
  /* ---------------------------------------------------------------------- */

  const renderLabel = () => {
    if (mode === "single") {
      return singleValue ? format(singleValue, "MMM dd, yyyy") : placeholder;
    }

    if (mode === "multiple") {
      return multiValue.length
        ? multiValue.map((d) => format(d, "MMM dd")).join(", ")
        : placeholder;
    }

    if (mode === "range") {
      if (rangeValue?.from && rangeValue.to) {
        return `${format(rangeValue.from, "MMM dd")} - ${format(
          rangeValue.to,
          "MMM dd",
        )}`;
      }

      if (rangeValue?.from) {
        return format(rangeValue.from, "MMM dd");
      }
    }

    return placeholder;
  };

  const triggerButton = (
    <Button
      variant="outline"
      disabled={disabled}
      className={cn(
        "overflow-hidden truncate whitespace-nowrap justify-start text-left font-normal h-10 px-5",
        (mode === "single" ? !singleValue : 
        mode === "multiple" ? multiValue.length === 0 : 
        !rangeValue?.from) && "text-muted-foreground",
        triggerClassName,
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
      <span className="truncate">{renderLabel()}</span>
    </Button>
  );

  /* ---------------------------------------------------------------------- */

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        {showTooltip ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>{renderLabel()}</TooltipContent>
          </Tooltip>
        ) : (
          <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        )}

        <PopoverContent className="w-auto p-4" align="start">
          {/* HEADER */}
          <div className="flex justify-between gap-2 mb-4">
            <Select
              onValueChange={handleMonthChange}
              value={months[visibleMonth.getMonth()]}
            >
              <SelectTrigger className="w-[130px] h-9">
                <SelectValue />
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
              value={visibleMonth.getFullYear().toString()}
            >
              <SelectTrigger className="w-[100px] h-9">
                <SelectValue />
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

          {/* CALENDAR */}
          {mode === "range" && (
            <Calendar
              mode="range"
              required={false}
              selected={rangeValue}
              onSelect={(val) => handleDateChange(val)}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              numberOfMonths={1}
              initialFocus
              disabled={{
                before: disablePastDates ? new Date() : minDate,
                after: maxDate,
              }}
            />
          )}

          {mode === "multiple" && (
            <Calendar
              mode="multiple"
              selected={multiValue}
              onSelect={(val) => handleDateChange(val)}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              numberOfMonths={1}
              initialFocus
              disabled={{
                before: disablePastDates ? new Date() : minDate,
                after: maxDate,
              }}
            />
          )}

          {mode === "single" && (
            <Calendar
              mode="single"
              selected={singleValue}
              onSelect={(val) => handleDateChange(val)}
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              numberOfMonths={1}
              initialFocus
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
