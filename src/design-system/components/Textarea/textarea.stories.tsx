import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { useState } from 'react';

const meta: Meta<typeof Textarea> = {
  title: 'components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 max-w-xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us a little bit about yourself...',
    helperText: 'Your bio will be displayed on your public profile.',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={`Character count: ${value.length}`}
      />
    );
  },
  args: {
    label: 'Live Commentary',
    placeholder: 'Type something to see the helper text update...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Textarea size="sm" label="Small (sm)" placeholder="Compact for short notes..." />
      <Textarea size="md" label="Medium (md)" placeholder="Standard feedback size..." />
      <Textarea size="lg" label="Large (lg)" placeholder="Detailed project description..." />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Textarea
        label="Required Field"
        required
        placeholder="Cannot leave this empty"
      />
      <Textarea
        label="Error State"
        error="This message is too long (limit: 500 characters)"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
      />
    </div>
  ),
};

export const AutoSizing: Story = {
  args: {
    label: 'Dynamic Height',
    placeholder: 'Paste a long paragraph here or press Enter many times...',
    className: 'field-sizing-content',
    helperText: 'Using the modern CSS field-sizing-content property.',
  },
};