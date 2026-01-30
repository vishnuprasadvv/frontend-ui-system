import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Checkbox } from "./checkbox";

/* ---------------------------------- */

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/* ---------------------------------- */
/* Stories */
/* ---------------------------------- */

export const Default: Story = {
  args: {
    label: "Accept terms & conditions",
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <Checkbox
        label="Receive notifications"
        checked={checked}
        onCheckedChange={setChecked}
      />
    );
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Subscribe to newsletter",
    helperText: "We’ll only send product updates.",
  },
};

export const Error: Story = {
  args: {
    label: "Accept privacy policy",
    error: "This field is required",
  },
};

export const Required: Story = {
  args: {
    label: "Agree to policy",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Playground checkbox",
    helperText: "Toggle me",
    size: "md",
    disabled: false,
    required: false,
  },
};
