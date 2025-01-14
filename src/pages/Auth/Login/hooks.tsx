import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormType } from './types';

const useLogin = () => {
    const { control, handleSubmit, reset } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        console.log(data);
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        reset,
    };
};

export default useLogin;
