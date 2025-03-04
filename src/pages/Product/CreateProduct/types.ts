import { OptionType } from '@/types';
import {
  Control,
  ControllerRenderProps,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

export type ProductFormType = {
  category_id: string | null;
  image?: string | ArrayBuffer | null;
  imageDisplay?: File | null;
  name: string;
  price_1: number;
  price_2: number;
  size: string;
  stock: number;
  surface: string;
  type: string;
};

export type RenderFieldType = {
  control: Control<ProductFormType, any>;
  resetField: UseFormResetField<ProductFormType>;
  setValue: UseFormSetValue<ProductFormType>;
};

export type RenderCategoryFieldType = RenderFieldType & {
  categoryOptions: OptionType[];
  handleChangeCategory: handleChangeCategoryType;
};

export type ParamType = {
  id?: number;
};

export type handleChangeCategoryType = (
  field: ControllerRenderProps<ProductFormType, 'category_id'>,
  value: string | null | undefined
) => void;
