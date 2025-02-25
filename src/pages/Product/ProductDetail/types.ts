import { CategoryType, ProductType } from '@/types';

export type ParamsType = {
    id?: number;
};

export type ProductDetailResponseType = ProductType & {
    category: CategoryType;
};
