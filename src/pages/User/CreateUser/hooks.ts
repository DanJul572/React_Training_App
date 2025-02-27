import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';
import translator from '@/helpers/translator';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ParamType, UserFormType } from './types';

const useCreateUser = () => {
  const params: ParamType = useParams();
  const navigate = useNavigate();

  const { setAlertProps } = useContext(ZAlertContext);
  const { setOpenLoader } = useContext(ZLoaderContext);

  const { control, handleSubmit, resetField, reset, setValue } =
    useForm<UserFormType>({
      defaultValues: {
        name: '',
        role_id: '',
        email: '',
        password: '',
      },
    });

  const clearAlert = () => {
    setAlertProps({
      open: false,
      message: null,
      type: 'success',
    });
  };

  const showSuccessAlert = (message: string): void => {
    setAlertProps({
      open: true,
      message: message,
      type: 'success',
    });
  };

  const insertUser = (data: UserFormType) => {
    request
      .post<UserFormType, UserFormType>('/users', data)
      .then(() => {
        showSuccessAlert(translator('data_is_created'));
        reset();
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          showErrorAlert(error, setAlertProps);
        }
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  const updateUser = (data: UserFormType) => {
    request
      .put<UserFormType>(`/users/${params.id}`, data)
      .then((response) => {
        showSuccessAlert(translator('data_is_updated'));
        reset(response);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          showErrorAlert(error, setAlertProps);
        }
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  const getUser = () => {
    setOpenLoader(true);
    const userId = params.id;
    request
      .get<UserFormType>(`/users/${userId}`)
      .then((response) => {
        reset(response);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          showErrorAlert(error, setAlertProps);
        }
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  const onSubmit: SubmitHandler<UserFormType> = (data) => {
    clearAlert();
    setOpenLoader(true);
    if (params.id) {
      updateUser(data);
    } else {
      insertUser(data);
    }
  };

  const onClear = () => {
    reset();
  };

  const onBack = () => {
    navigate('/user');
  };

  useEffect(() => {
    if (params.id) {
      getUser();
    }
  }, [params]);

  return {
    control,
    handleSubmit,
    onBack,
    onClear,
    onSubmit,
    resetField,
    setValue,
  };
};

export default useCreateUser;
