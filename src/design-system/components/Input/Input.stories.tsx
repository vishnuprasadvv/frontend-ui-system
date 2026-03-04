import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-[320px]">
      <Input size="sm" label="Small" />
      <Input size="md" label="Medium" />
      <Input size="lg" label="Large" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helperText: "This will be public",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "Invalid email address",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Email",
    prefix: <Mail className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    label: "Search",
    loading: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Account ID",
    value: "USR-92831",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
