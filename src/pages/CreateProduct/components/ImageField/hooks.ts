import { MouseEventHandler } from 'react';

import { RenderFieldType } from '../../types';
import { HandleChangeType } from './types';

const useImageField = (props: RenderFieldType) => {
    const handleChange: HandleChangeType = (event, field) => {
        const file = event.target.files?.[0];
        field.onChange(file);
    };

    const hanldeClear: MouseEventHandler<HTMLButtonElement> = () => {
        props.resetField('image');
    };

    return {
        handleChange,
        hanldeClear,
    };
};

export default useImageField;
