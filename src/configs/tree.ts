import translator from '@/helpers/translator';

import { MenuType } from '@/types';

const isAdmin = localStorage.getItem('role_id') === '1';

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
        label: translator('transaction'),
        url: '/transaction',
    });
}

export default tree;
