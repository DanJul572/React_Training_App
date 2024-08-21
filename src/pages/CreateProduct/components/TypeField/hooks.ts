import { RenderFieldType } from '../../types';

import { handleChangeType } from './types';

const useTypeField = (props: RenderFieldType<'type'>) => {
    const handleChange: handleChangeType = (_event, value) => {
        props.field.onChange(value?.value);
    };

    return { handleChange };
};

export default useTypeField;
