import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, type SelectOption } from './select';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options: SelectOption[] = [
  { label: 'Savings Account', value: 'savings' },
  { label: 'Current Account', value: 'current' },
  { label: 'Fixed Deposit', value: 'fd' },
  { label: 'Recurring Deposit', value: 'rd' },
];

const ControlledSelect = (args: any) => {
  const [value, setValue] = useState<string | undefined>(args.value);

  return (
    <div className="w-62">
      <Select
        {...args}
        value={value}
        onChange={(v) => {
          setValue(v);
          args.onChange?.(v);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Select account type',
    label: 'Account type',
    options,
    size: 'md',
    disabled: false,
  },
};

export const Small: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Small select',
    options,
    size: 'sm',
  },
};

export const Large: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Large select',
    options,
    size: 'lg',
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Disabled select',
    options,
    disabled: true,
  },
};

export const PreSelected: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    options,
    value: 'current',
  },
};
