import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Switch } from "./switch";

/* ---------------------------------- */

const meta: Meta<typeof Switch> = {
  title: "components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Switch>;

/* ---------------------------------- */

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = React.useState(false);

    return (
      <Switch
        label="Dark mode"
        checked={on}
        onCheckedChange={setOn}
      />
    );
  },
};

export const WithHelper: Story = {
  args: {
    label: "Send emails",
    helperText: "Weekly digest only",
  },
};

export const Error: Story = {
  args: {
    label: "Terms required",
    error: "You must enable this",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
};
