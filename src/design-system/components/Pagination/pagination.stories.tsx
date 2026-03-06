import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination, type PaginationProps } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number", min: 1 },
    },
    totalPages: {
      control: { type: "number", min: 1 },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    onPageChange: { action: "page changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;


// -----------------------------
// 🔵 Controlled wrapper
// -----------------------------

const ControlledPagination = (args: PaginationProps) => {
  const [page, setPage] = useState(args.page);

  return (
    <Pagination
      {...args}
      page={page}
      onPageChange={(p) => {
        setPage(p);
        args.onPageChange?.(p);
      }}
    />
  );
};


// -----------------------------
// STORIES
// -----------------------------

export const Playground: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 5,
    totalPages: 20,
    size: "md",
  },
};


export const Small: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 4,
    totalPages: 15,
    size: "sm",
  },
};


export const Large: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 10,
    totalPages: 50,
    size: "lg",
  },
};


export const NearStart: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 1,
    totalPages: 20,
  },
};


export const NearEnd: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 19,
    totalPages: 20,
  },
};


export const FewPages: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 2,
    totalPages: 3,
  },
};


export const HundredPages: Story = {
  render: (args) => <ControlledPagination {...args} />,
  args: {
    page: 55,
    totalPages: 100,
  },
};
