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
                id: '4',
                label: 'Create Product',
                url: '/product/create',
            },
        ],
    },
];

export default tree;
