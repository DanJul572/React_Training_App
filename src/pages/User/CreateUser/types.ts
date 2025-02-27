import {
  Control,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

export type UserFormType = {
  name: string;
  email: string;
  password: string;
  role_id: string;
};

export type RenderFieldType = {
  control: Control<UserFormType, any>;
  resetField: UseFormResetField<UserFormType>;
  setValue: UseFormSetValue<UserFormType>;
};

export type ParamType = {
  id?: number;
};
