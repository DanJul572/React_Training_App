import { MenuType } from '@/types/menu';

const tree: MenuType[] = [
    {
        id: '1',
        label: 'Dashboard',
        url: '/dashboard',
    },
    {
        id: '2',
        label: 'Product',
        child: [
            {
                id: '3',
                label: 'Create Product',
                url: '/create-product',
            },
        ],
    },
];

export default tree;
