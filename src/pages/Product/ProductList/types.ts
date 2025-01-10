import { SortType } from '@/types';

export type ProductType = {
    id: number;
    colorCode: string;
    image: string | null;
    name: string;
    size: number;
    stock: number;
    surface: string;
    type: string;
    created_at: string;
    updated_at: string;
};

export type TablePropertyType = {
    quickFilter: string | null;
    page: number;
    sort: {
        field: string;
        sort: SortType;
    };
};

export type OnLoadType = (tableProperty: TablePropertyType) => void;

export type GetUrlType = (tableProperty: TablePropertyType) => string;

export type DisplayDataType = {
    rows: ProductType[];
    count: number;
};
