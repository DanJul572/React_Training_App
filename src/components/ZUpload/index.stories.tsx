import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import StoryBook from '@/layouts/StoryBook';

import ZUpload from '.';

import { PropsType } from './types';

export default {
    title: 'Components/ZUpload',
    component: ZUpload,
    decorators: (Story) => {
        return (
            <StoryBook>
                <Story />
            </StoryBook>
        );
    },
} as Meta;

const Template: StoryFn<PropsType> = (args) => {
    const [file, setFile] = useState<File | undefined>(args.value);

    const handleFileChange: PropsType['onChange'] = (event) => {
        const newFile = event.target.files?.[0];
        setFile(newFile);
        args.onChange(event);
    };

    const handleClear: PropsType['onClear'] = (event) => {
        setFile(undefined);
        args.onClear(event);
    };

    return (
        <ZUpload
            {...args}
            value={file}
            onChange={handleFileChange}
            onClear={handleClear}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'Upload File',
    value: undefined,
    onChange: (e) => console.log('File selected:', e.target.files?.[0]),
    onClear: () => console.log('Clear button clicked'),
};
