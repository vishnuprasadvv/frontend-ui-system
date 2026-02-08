import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, type ComboboxOption } from './selectCombobox';
import { useState } from 'react';

const options: ComboboxOption[] = [
  { label: 'Next.js', value: 'next' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue', value: 'vue' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
];

const meta: Meta<typeof Combobox> = {
  title: 'components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  // Wrapper to give the dropdown space in Storybook
  decorators: [
    (Story) => (
      <div className="p-12 min-h-[400px] flex justify-center">
        <div className="w-full max-w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

export const Single: Story = {
  render: (args) => {
    const [val, setVal] = useState<ComboboxOption | null>(null);
    return <Combobox {...args} multiple={false} value={val} options={options} onChange={setVal} />;
  },
  args: {
    label: 'Framework',
    options,
    placeholder: 'Select a framework...',
    showClear: true,
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const [val, setVal] = useState<ComboboxOption[]>([]);
    const { showClear, ...rest } = args;
    return <Combobox {...rest} multiple value={val} onChange={setVal} />;
  },
  args: {
    label: 'Technologies',
    options,
    placeholder: 'Pick multiple...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Combobox size="sm" label="Small (sm)" options={options} placeholder="Small input..." />
      <Combobox size="md" label="Medium (md)" options={options} placeholder="Medium input..." />
      <Combobox size="lg" label="Large (lg)" options={options} placeholder="Large input..." />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Combobox label="Loading State" options={options} loading helperText="Fetching data..." />
      <Combobox label="Disabled State" options={options} disabled placeholder="Cannot interact" />
      <Combobox 
        label="Error State" 
        options={options} 
        error="Please select a valid technology" 
        required 
      />
    </div>
  ),
};

export const CustomPositioning: Story = {
  render: (args) => {
    const [val, setVal] = useState<ComboboxOption | null>(null);
    return <Combobox {...args} multiple={false} value={val} onChange={setVal} />;
  },
  args: {
    label: 'Side: Right / Align: Start',
    options,
    side: 'right',
    sideOffset: 12,
    align: 'start',
  },
};