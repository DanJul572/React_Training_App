import { Meta, StoryFn } from '@storybook/react';
import { PropsType } from './types';
import ZSelect from '.';
import StoryBook from '@/layouts/StoryBook';

// Define metadata for the story
const meta: Meta = {
    title: 'Components/ZSelect',
    component: ZSelect,
    argTypes: {
        label: { control: 'text' },
        name: { control: 'text' },
        value: { control: 'text' },
        options: { control: 'object' },
        onChange: { action: 'changed' },
    },
};

export default meta;

// Define the default template for stories
const Template: StoryFn<PropsType> = (args) => (
    <StoryBook>
        <ZSelect {...args} />
    </StoryBook>
);

// Define default story
export const Default = Template.bind({});
Default.args = {
    label: 'Select Option',
    name: 'select',
    value: '',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
};

// Define a story with pre-selected value
export const PreSelected = Template.bind({});
PreSelected.args = {
    ...Default.args,
    value: '2', // Pre-select option 2
};
