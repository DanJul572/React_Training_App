import { Controller } from 'react-hook-form';

import { RenderFieldType } from '../../types';
import useImageField from './hooks';

import ZUpload from '@/components/ZUpload';

const ImageField = (props: RenderFieldType) => {
    const { handleChange, hanldeClear } = useImageField(props);

    return (
        <Controller
            name="image"
            control={props.control}
            render={({ field }) => (
                <ZUpload
                    label="Image"
                    value={field.value}
                    onChange={(e) => handleChange(e, field)}
                    onClear={hanldeClear}
                />
            )}
        />
    );
};

export default ImageField;
