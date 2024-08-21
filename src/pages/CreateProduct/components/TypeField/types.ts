import { ControllerRenderProps } from 'react-hook-form';

import { ProductFormType } from '../../types';

export type handleChangeType = (
    field: ControllerRenderProps<ProductFormType, 'type'>,
    value: string | null | undefined
) => void;
