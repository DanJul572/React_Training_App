import { Dispatch, ReactNode, SetStateAction } from 'react';
import { SortType } from '@/types';

export type PropsType = {
  children: ReactNode;
};

export type TablePropertyType = {
  quickFilter: string | null;
  page: number;
  isWithoutImage?: boolean;
  sort: {
    field: string;
    sort: SortType;
  };
};

export type ProductTablePropertyType = {
  tableProperty: TablePropertyType;
  setTableProperty: Dispatch<SetStateAction<TablePropertyType>>;
};
