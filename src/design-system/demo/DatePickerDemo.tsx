import * as React from "react";
import { DatePicker } from "@/design-system/components/DatePicker/DatePicker";
import type { DateRange } from "react-day-picker";

export function DatePickerDemo() {
  // State for controlled examples
  const [singleDate, setSingleDate] = React.useState<Date | undefined>();
  const [rangeDate, setRangeDate] = React.useState<DateRange | undefined>();
  const [multiDate, setMultiDate] = React.useState<Date[] | undefined>();

  return (
    <div className="p-10 space-y-10 max-w-xl">
      <h1 className="text-2xl font-semibold">DatePicker Demo</h1>

      {/* SINGLE DATE */}
      <section className="space-y-2">
        <h2 className="font-medium">Single Date (controlled)</h2>
        <DatePicker
          mode="single"
          placeholder="Select a date"
          value={singleDate}
          onChange={(val) => setSingleDate(val as Date | undefined)}
          showTooltip
        />
      </section>

      {/* RANGE DATE */}
      <section className="space-y-2">
        <h2 className="font-medium">Date Range (controlled)</h2>
        <DatePicker
          mode="range"
          placeholder="Select a date range"
          value={rangeDate}
          onChange={(val) => setRangeDate(val as DateRange | undefined)}
        />
      </section>

      {/* MULTIPLE DATES */}
      <section className="space-y-2">
        <h2 className="font-medium">Multiple Dates (controlled)</h2>
        <DatePicker
          mode="multiple"
          placeholder="Select multiple dates"
          value={multiDate}
          onChange={(val) => setMultiDate(val as Date[] | undefined)}
        />
      </section>

      {/* UNCONTROLLED */}
      <section className="space-y-2">
        <h2 className="font-medium">Single Date (uncontrolled)</h2>
        <DatePicker
          mode="single"
          placeholder="Pick a date"
          defaultValue={new Date()}
        />
      </section>

      {/* DISABLED */}
      <section className="space-y-2">
        <h2 className="font-medium">Disabled</h2>
        <DatePicker
          mode="single"
          placeholder="Disabled picker"
          disabled
        />
      </section>

      {/* NO TOOLTIP */}
      <section className="space-y-2">
        <h2 className="font-medium">Tooltip Disabled</h2>
        <DatePicker
          mode="single"
          placeholder="No tooltip"
          showTooltip={false}
        />
      </section>
    </div>
  );
}
