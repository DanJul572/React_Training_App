import { MenuType } from '@/types/menu';

const tree: MenuType[] = [
    {
        id: '1',
        label: 'Dashboard',
        url: '/dashboard',
    },
    {
        id: '2',
        label: 'Transaksi',
        url: '/transaction',
    },
    {
        id: '3',
        label: 'Produk',
        url: '/product',
    },
    {
        id: '4',
        label: 'Pengguna',
        url: '/users',
    },
];

export default tree;
