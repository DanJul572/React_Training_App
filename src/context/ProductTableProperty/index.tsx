import { createContext, useState } from 'react';
import {
  ProductTablePropertyType,
  PropsType,
  TablePropertyType,
} from './types';

const defaultValue: TablePropertyType = {
  page: 1,
  quickFilter: null,
  isWithoutImage: false,
  sort: {
    field: 'product_name',
    sort: 'asc',
  },
};

const ProductTablePropertyContext =
  createContext<ProductTablePropertyType>({
    tableProperty: defaultValue,
    setTableProperty: () => {},
  });

const ProductTableProperty = (props: PropsType) => {
  const [tableProperty, setTableProperty] =
    useState<TablePropertyType>(defaultValue);

  return (
    <ProductTablePropertyContext.Provider
      value={{ tableProperty, setTableProperty }}
    >
      {props.children}
    </ProductTablePropertyContext.Provider>
  );
};

export { ProductTableProperty, ProductTablePropertyContext };
