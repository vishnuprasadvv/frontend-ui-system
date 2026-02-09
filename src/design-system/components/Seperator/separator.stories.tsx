import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout : 'centered'
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
      description: "The visual style of the line",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The direction of the separator",
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

/**
 * The standard horizontal separator used to divide content sections.
 */
export const Default: Story = {
  render: (args) => (
    <div className="w-100 p-4 border rounded-lg bg-card">
      <h4 className="text-sm font-medium leading-none">Design System</h4>
      <p className="text-sm text-muted-foreground mt-1">
        An open-source UI component library.
      </p>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
  args: {
    variant: "solid",
    orientation: "horizontal",
  },
}

/**
 * Useful for login forms or dividers that require context.
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="w-[400px] space-y-8 p-4">
       <Separator {...args} label="OR" />
       <Separator {...args} label="CONTINUE WITH GOOGLE" variant="dashed" />
       <Separator {...args} label="SECTION END" variant="dotted" />
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
}

/**
 * Vertical orientation used to separate inline elements like breadcrumbs or nav links.
 */
export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-10 items-center justify-center space-x-6">
      <span className="text-sm">Profile</span>
      <Separator {...args} />
      <span className="text-sm">Settings</span>
      <Separator {...args} />
      <span className="text-sm">Logout</span>
    </div>
  ),
  args: {
    orientation: "vertical",
    variant: "solid",
  },
}