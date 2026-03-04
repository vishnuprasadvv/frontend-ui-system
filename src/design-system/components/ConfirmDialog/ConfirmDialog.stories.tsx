import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ConfirmationDialog } from "./ConfirmDialog";
import { Button } from "@/design-system/components/Button/button";
import { AlertTriangle } from "lucide-react";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "components/ConfirmationDialog",
  component: ConfirmationDialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    confirmText: { control: "text" },
    cancelText: { control: "text" },
    isCancelButtonVisible: { control: "boolean" },
    isShowCloseButton: { control: "boolean" },
    titleAlignment: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>

        <ConfirmationDialog
          {...args}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => {
            console.log("Confirmed");
            setOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    title: "Are you sure?",
    description: "This action cannot be undone.",
    confirmText: "Confirm",
    cancelText: "Cancel",
    isCancelButtonVisible: true,
    isShowCloseButton: false,
    titleAlignment: "center",
  },
};

export const WithIcon: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete Item</Button>

        <ConfirmationDialog
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Delete Item"
          description="This will permanently delete the item."
          confirmText="Delete"
          icon={<AlertTriangle className="w-8 h-8 text-destructive" />}
        />
      </>
    );
  },
};

export const AsyncConfirm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    const handleConfirm = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Async Dialog</Button>

        <ConfirmationDialog
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
          title="Process Payment"
          description="This may take a few seconds."
          confirmText="Proceed"
        />
      </>
    );
  },
};

export const WithoutCancel: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>

        <ConfirmationDialog
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Information"
          description="This action only requires acknowledgment."
          confirmText="Okay"
          isCancelButtonVisible={false}
        />
      </>
    );
  },
};

export const Alignments: Story = {
  render: () => {
    const [open, setOpen] = React.useState<null | "left" | "center" | "right">(null);

    return (
      <div className="flex gap-4">
        <Button onClick={() => setOpen("left")}>Left</Button>
        <Button onClick={() => setOpen("center")}>Center</Button>
        <Button onClick={() => setOpen("right")}>Right</Button>

        {open && (
          <ConfirmationDialog
            open={true}
            onCancel={() => setOpen(null)}
            onConfirm={() => setOpen(null)}
            title="Alignment Example"
            description="Check title alignment"
            titleAlignment={open}
          />
        )}
      </div>
    );
  },
};