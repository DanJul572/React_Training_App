import { SyntheticEvent } from 'react';
import { ProductType, SortType } from '@/types';

export type TablePropertyType = {
  quickFilter: string | null;
  page: number;
  isWithoutImage?: boolean;
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

export type OnWithoutImageChangeType = (
  event: SyntheticEvent,
  checked: boolean
) => void;
