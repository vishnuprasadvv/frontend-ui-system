import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { RadioGroup, RadioGroupItem } from "./radioGroup";

/* ---------------------------------- */
/* Meta */
/* ---------------------------------- */

const meta: Meta<typeof RadioGroup> = {
  title: "components/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    label: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    error: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

/* ---------------------------------- */
/* Controlled Wrapper */
/* ---------------------------------- */

function ControlledRadio(args: any) {
  const [value, setValue] = React.useState("default");

  return (
    <RadioGroup
      {...args}
      value={value}
      onValueChange={setValue}
    >
      <RadioGroupItem value="default" label="Default" />
      <RadioGroupItem value="comfortable" label="Comfortable" />
      <RadioGroupItem value="compact" label="Compact"/>
    </RadioGroup>
  );
}

/* ---------------------------------- */
/* Stories */
/* ---------------------------------- */

export const Playground: Story = {
  render: (args) => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    helperText: "Select spacing",
    size: "md",
    required: false,
  },
};

export const WithError: Story = {
  render: (args) => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    error: "Selection is required",
    size: "md",
  },
};

export const Required: Story = {
  render: (args) => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    required: true,
  },
};

export const Small: Story = {
  render: (args) => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    size: "sm",
  },
};

export const Large: Story = {
  render: (args) => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    size: "lg",
  },
};

/* ---------------------------------- */
/* All Sizes */
/* ---------------------------------- */

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 max-w-sm">
      <RadioGroup
        label="Small"
        size="sm"
        defaultValue="default"
      >
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>

      <RadioGroup
        label="Medium"
        size="md"
        defaultValue="default"
      >
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>

      <RadioGroup
        label="Large"
        size="lg"
        defaultValue="default"
      >
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>
    </div>
  ),
};

/* ---------------------------------- */
/* JSX Labels */
/* ---------------------------------- */

export const RichLabels: Story = {
  render: () => (
    <RadioGroup
      label="Plan"
      defaultValue="pro"
      size="md"
    >
      <RadioGroupItem
        value="free"
        label={
          <div>
            <p className="font-medium">Free</p>
            <p className="text-xs text-muted-foreground">
              Limited features
            </p>
          </div>
        }
      />

      <RadioGroupItem
        value="pro"
        label={
          <div>
            <p className="font-medium">Pro</p>
            <p className="text-xs text-muted-foreground">
              Best for teams
            </p>
          </div>
        }
      />
    </RadioGroup>
  ),
};
