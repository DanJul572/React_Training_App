import { ChangeEvent } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { ProductFormType } from '../../types';

export type HandleChangeType = (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<ProductFormType, 'image'>
) => void;
