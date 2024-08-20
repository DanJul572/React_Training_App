import { ChangeEventHandler, MouseEventHandler } from 'react';

import { RenderFieldType } from '../../types';

const useImageField = (props: RenderFieldType<'image'>) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        props.field.onChange(file);
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
