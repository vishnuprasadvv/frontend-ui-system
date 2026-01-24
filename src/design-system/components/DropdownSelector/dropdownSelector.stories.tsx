import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DropdownSelector, type Option } from "./DropdownSelector";

const meta: Meta<typeof DropdownSelector> = {
  title: "Components/DropdownSelector",
  component: DropdownSelector,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof DropdownSelector>;

const OPTIONS: Option[] = [
  { label: "Option One", value: "one" },
  { label: "Option Two", value: "two" },
  { label: "Option Three", value: "three" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <DropdownSelector
        value={value}
        onChange={setValue}
        options={OPTIONS}
        placeholder="Select option"
      />
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState("two");

    return (
      <DropdownSelector
        value={value}
        onChange={setValue}
        options={OPTIONS}
      />
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");

    const manyOptions: Option[] = Array.from({ length: 15 }).map(
      (_, i) => ({
        label: `Item ${i + 1}`,
        value: `item-${i + 1}`,
      })
    );

    return (
      <DropdownSelector
        value={value}
        onChange={setValue}
        options={manyOptions}
      />
    );
  },
};
