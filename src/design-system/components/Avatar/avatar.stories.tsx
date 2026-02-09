import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback } from "./avatar"

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Changes the dimensions and font size",
    },
    shape: {
      control: "radio",
      options: ["circle", "square"],
      description: "The border-radius of the avatar",
    },
    status: {
      control: "select",
      options: ["online", "offline", "away", "busy", undefined],
      description: "Shows a status indicator dot",
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

/**
 * Standard usage with an image.
 */
export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "md",
    shape: "circle",
  },
}

/**
 * Demonstrates the fallback logic when the image is broken or missing.
 */
export const Fallback: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Avatar {...args}>
        <AvatarImage src="https://broken-link.com/img.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="bg-primary text-primary-foreground">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  ),
  args: {
    size: "md",
  },
}

/**
 * Showcasing all available sizes.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {["xs", "sm", "md", "lg", "xl"].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size as any} status="online">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">{size}</span>
        </div>
      ))}
    </div>
  ),
}

/**
 * Avatars with status indicators.
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-6">
      <Avatar status="online"><AvatarFallback>ON</AvatarFallback></Avatar>
      <Avatar status="away"><AvatarFallback>AW</AvatarFallback></Avatar>
      <Avatar status="busy"><AvatarFallback>BS</AvatarFallback></Avatar>
      <Avatar status="offline"><AvatarFallback>OF</AvatarFallback></Avatar>
    </div>
  ),
}