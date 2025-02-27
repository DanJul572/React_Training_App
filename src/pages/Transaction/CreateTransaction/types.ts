import { ControllerRenderProps } from 'react-hook-form';

export type TransactionFormType = {
  count: number;
  product_id: number | null;
  transaction_type_id: string;
};

export type handleChangeProductType = (
  field: ControllerRenderProps<TransactionFormType, 'product_id'>,
  value: string | null | undefined
) => void;
