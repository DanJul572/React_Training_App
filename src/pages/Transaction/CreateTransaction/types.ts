import { ControllerRenderProps } from 'react-hook-form';

export type TransactionFormType = {
    product_id: number | null;
    count: number;
};

export type handleChangeProductType = (
    field: ControllerRenderProps<TransactionFormType, 'product_id'>,
    value: string | null | undefined
) => void;
