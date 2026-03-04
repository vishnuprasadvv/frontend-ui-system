import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { DatePicker } from "./DatePicker";
import type { DateRange } from "react-day-picker";

const meta: Meta<typeof DatePicker> = {
  title: "components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

/* ----------------------------------------
   SINGLE (CONTROLLED)
---------------------------------------- */

export const Single: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();

    return (
      <DatePicker
        mode="single"
        placeholder="Pick a date"
        value={value}
        onChange={(v) => setValue(v as Date | undefined)}
      />
    );
  },
};

/* ----------------------------------------
   RANGE (CONTROLLED)
---------------------------------------- */

export const Range: Story = {
  render: () => {
    const [value, setValue] = React.useState<DateRange | undefined>();

    return (
      <DatePicker
        mode="range"
        placeholder="Pick date range"
        value={value}
        onChange={(v) => setValue(v as DateRange | undefined)}
      />
    );
  },
};

/* ----------------------------------------
   MULTIPLE
---------------------------------------- */

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date[]>([]);

    return (
      <DatePicker
        mode="multiple"
        placeholder="Pick multiple dates"
        value={value}
        onChange={(v) => setValue(v as Date[])}
      />
    );
  },
};

/* ----------------------------------------
   WITH LIMITS
---------------------------------------- */

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();

    return (
      <DatePicker
        mode="single"
        placeholder="Limited dates"
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        value={value}
        onChange={(v) => setValue(v as Date | undefined)}
      />
    );
  },
};

/* ----------------------------------------
   DISABLED
---------------------------------------- */

export const Disabled: Story = {
  render: () => (
    <DatePicker
      mode="single"
      placeholder="Disabled picker"
      disabled
    />
  ),
};

/* ----------------------------------------
   TOOLTIP OFF
---------------------------------------- */

export const NoTooltip: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();

    return (
      <DatePicker
        mode="single"
        placeholder="No tooltip"
        showTooltip={false}
        value={value}
        onChange={(v) => setValue(v as Date | undefined)}
      />
    );
  },
};
