import { Controller } from 'react-hook-form';

import ZAutoComplete from '@/components/ZAutoComplete';

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
                <ZAutoComplete
                    label="Type"
                    name="type"
                    options={typeOptions}
                    onChange={(_event, selected) =>
                        handleChange(field, selected)
                    }
                />
            )}
        />
    );
};

export default TypeField;
