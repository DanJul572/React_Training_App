import isAdmin from '@/helpers/isAdmin';
import translator from '@/helpers/translator';

import { MenuType } from '@/types';

const tree: MenuType[] = [
  {
    id: '1',
    label: translator('dashboard'),
    url: '/',
  },
  {
    id: '2',
    label: translator('product'),
    url: '/product',
  },
];

if (isAdmin) {
  tree.push({
    id: '3',
    label: translator('category'),
    url: '/category',
  });
  tree.push({
    id: '4',
    label: translator('transaction'),
    url: '/transaction',
  });
  tree.push({
    id: '5',
    label: translator('user'),
    url: '/user',
  });
}

export default tree;
