import { handleChangeType, PropsType } from './types';

const useZAutoComplete = (props: PropsType) => {
    const handleChange: handleChangeType = (event, value) => {
        props.onChange(event, value);
    };

    return { handleChange };
};

export default useZAutoComplete;
