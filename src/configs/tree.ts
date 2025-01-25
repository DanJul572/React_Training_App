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
    {
        id: '3',
        label: translator('transaction'),
        url: '/transaction',
    },
];

export default tree;
