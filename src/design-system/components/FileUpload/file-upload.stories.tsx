import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./file-upload";
import React from "react";

const meta: Meta<typeof FileUpload> = {
  title: "components/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    multiple: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    maxFiles: {
      control: "number",
    },
    maxSize: {
      control: "number",
    },
    error: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "Upload file",
    helperText: "Supports PDF, PNG, JPG",
  },
};

export const Multiple: Story = {
  args: {
    label: "Upload documents",
    multiple: true,
    maxFiles: 5,
    helperText: "You can upload up to 5 files",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <FileUpload size="sm" label="Small Upload" />
      <FileUpload size="md" label="Medium Upload" />
      <FileUpload size="lg" label="Large Upload" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: "Upload file",
    error: "File size exceeds 5MB",
  },
};

export const Disabled: Story = {
  args: {
    label: "Upload file",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);

    return (
      <div className="w-96">
        <FileUpload
          label="Controlled Upload"
          multiple
          value={files}
          onChange={setFiles}
          helperText={`Selected: ${files.length} files`}
        />
      </div>
    );
  },
};