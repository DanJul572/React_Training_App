import { SortType, UserType } from '@/types';

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
  rows: UserType[];
  count: number;
};
