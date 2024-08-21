import { Controller } from 'react-hook-form';

import ZSelect from '@/components/ZSelect';

import { RenderFieldType } from '../../types';
import { typeOptions } from './enums';
import useTypeField from './hooks';

const TypeField = (props: RenderFieldType) => {
    const { handleChange } = useTypeField();

    return (
        <Controller
            name="type"
            control={props.control}
            render={({ field }) => (
                <ZSelect
                    options={typeOptions}
                    label="Type"
                    name="type"
                    value={field.value}
                    onChange={(e) => handleChange(field, e.target.value)}
                />
            )}
        />
    );
};

export default TypeField;
