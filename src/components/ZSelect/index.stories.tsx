import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectChangeEvent } from '@mui/material/Select';
import { PropsType } from './types';
import ZSelect from '.';

export default {
    title: 'Components/ZSelect',
    component: ZSelect,
} as Meta;

const Template: StoryFn<PropsType> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
        args.value
    );

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value);
        args.onChange(event);
    };

    return (
        <ZSelect {...args} value={selectedValue} onChange={handleChange} />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'Select an option',
    name: 'example-select',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    value: '1',
    onChange: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
    label: 'Select an option',
    name: 'example-select',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    value: '',
    onChange: () => {},
};
