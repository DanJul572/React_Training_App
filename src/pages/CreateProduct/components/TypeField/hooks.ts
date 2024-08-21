import { handleChangeType } from './types';

const useTypeField = () => {
    const handleChange: handleChangeType = (field, value) => {
        field.onChange(value?.value);
    };

    return { handleChange };
};

export default useTypeField;
