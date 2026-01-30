import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { MultiSelect } from "../MultiSelect/multiSelect";

const OPTIONS = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "components/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    error: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

/* ---------------------------------- */
/* Controlled wrapper */
/* ---------------------------------- */

function Controlled(args: any) {
  const [value, setValue] = useState<string[]>(args.value ?? []);

  return (
    <div className="w-38">
      <MultiSelect
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

/* ---------------------------------- */
/* Stories */
/* ---------------------------------- */

export const Default: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    options: OPTIONS,
    value: [],
  },
};

export const WithLabel: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    options: OPTIONS,
    value: [],
  },
};

export const Required: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    required: true,
    options: OPTIONS,
    value: [],
  },
};

export const WithHelperText: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    helperText: "Select all frameworks you have used",
    options: OPTIONS,
    value: [],
  },
};

export const ErrorState: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    error: "At least one option is required",
    options: OPTIONS,
    value: [],
  },
};

export const SizeSmall: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "sm",
    options: OPTIONS,
    value: [],
  },
};

export const SizeMedium: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "md",
    options: OPTIONS,
    value: [],
  },
};

export const SizeLarge: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "lg",
    options: OPTIONS,
    value: [],
  },
};

export const Preselected: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Framework",
    options: OPTIONS,
    value: ["react", "vue"],
  },
};
