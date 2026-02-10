import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive", "success", "warning"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "radio",
      options: ["pill", "rounded"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
}

export const SemanticStates: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="success" showDot>Active</Badge>
      <Badge variant="warning" showDot>Attention</Badge>
      <Badge variant="destructive" showDot>Error</Badge>
    </div>
  ),
}

export const Removable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="secondary" onRemove={() => alert("Removed!")}>
        React
      </Badge>
      <Badge variant="secondary" onRemove={() => alert("Removed!")}>
        Tailwind
      </Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}