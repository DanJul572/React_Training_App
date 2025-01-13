import translator from '@/helpers/translator';

import { MenuType } from '@/types';

const tree: MenuType[] = [
    {
        id: '1',
        label: translator('dashboard'),
        url: '/dashboard',
    },
    {
        id: '2',
        label: translator('transaction'),
        url: '/transaction',
    },
    {
        id: '3',
        label: translator('product'),
        url: '/product',
    },
    {
        id: '4',
        label: translator('user'),
        url: '/users',
    },
];

export default tree;
