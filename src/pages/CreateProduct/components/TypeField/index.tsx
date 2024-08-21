import ZAutoComplete from '@/components/ZAutoComplete';

import { RenderFieldType } from '../../types';

import { typeOptions } from './enums';

import useTypeField from './hooks';

const TypeField = (props: RenderFieldType<'type'>) => {
    const { handleChange } = useTypeField(props);

    return (
        <ZAutoComplete
            label="Type"
            name="type"
            options={typeOptions}
            onChange={handleChange}
        />
    );
};

export default TypeField;
