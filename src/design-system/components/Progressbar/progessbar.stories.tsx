import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./progressbar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "error", "neutral"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["simple", "with-label", "percentage-only"],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-10 bg-background flex justify-center border rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/** 1. Default Simple State */
export const Default: Story = {
  args: {
    value: 65,
    variant: "primary",
    size: "md",
    type: "simple",
  },
};

/** 2. Full Developer View (With Label & Percentage) */
export const WithLabel: Story = {
  args: {
    value: 45,
    label: "Syncing node_modules...",
    type: "with-label",
    variant: "primary",
    size: "md",
  },
};

/** 3. Percentage Only (Clean Right-Aligned) */
export const PercentageOnly: Story = {
  args: {
    value: 88,
    type: "percentage-only",
    variant: "success",
    size: "sm",
  },
};

/** 4. Loading/Indeterminate State */
export const LoadingState: Story = {
  args: {
    loading: true,
    label: "Fetching data from server...",
    type: "with-label",
    variant: "primary",
    size: "md",
  },
};

/** 5. Error/Destructive State */
export const ErrorState: Story = {
  args: {
    value: 92,
    label: "Disk quota exceeded",
    type: "with-label",
    variant: "error",
    size: "md",
  },
};

/** 6. All Sizes Comparison */
export const SizesDemo = () => (
  <div className="flex flex-col gap-6 w-full max-w-sm">
    <ProgressBar size="sm" value={30} label="Small" type="with-label" />
    <ProgressBar size="md" value={60} label="Medium" type="with-label" />
    <ProgressBar size="lg" value={90} label="Large" type="with-label" />
  </div>
);