import { SortType } from '@/types';

export type TransactionType = {
    id: number;
    user: string;
    product: string;
    type: string;
    count: number;
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
    rows: TransactionType[];
    count: number;
};
