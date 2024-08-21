import { ControllerRenderProps } from 'react-hook-form';

import { OptionType } from '@/types/option';
import { ProductFormType } from '../../types';

export type handleChangeType = (
    field: ControllerRenderProps<ProductFormType, 'type'>,
    value: OptionType | null
) => void;
