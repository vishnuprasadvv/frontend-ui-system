import type { Meta, StoryObj } from "@storybook/react"
import { Toaster, toast } from "./toast"
import { Button } from "@/components/ui/button"

const ToastPlayground = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Status Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline" 
            onClick={() => toast.default("Default!", "Hello there....")}
          >
            Default Toast
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast.success("Success!", "Your profile has been updated.")}
          >
            Success Toast
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast.error("Error!", "Something went wrong on the server.")}
          >
            Error Toast
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast.warning("Warning", "Your storage is almost full.")}
          >
            Warning Toast
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast.info("Information", "New updates are available.")}
          >
            Info Toast
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold">Special Types</h3>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="secondary" 
            onClick={() => {
              const id = toast.loading("Uploading file...")
              setTimeout(() => toast.dismiss(id), 3000)
            }}
          >
            Loading (Auto-dismiss in 3s)
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => 
              toast.action("Undo Action", "Do you want to revert the changes?", "Undo", () => alert("Undone!"))
            }
          >
            With Action Button
          </Button>
        </div>
      </section>
    </div>
  )
}

const meta: Meta<typeof Toaster> = {
  title: "components/Toast",
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'top-center', 'bottom-center', 'bottom-right', 'bottom-left' ],
    }
  },
  decorators: [
    (Story) => (
      <>
        <ToastPlayground />
        <Story />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  args: {
    position: "top-right",
    expand: false,
    richColors: false,
    closeButton: true,
  },
}