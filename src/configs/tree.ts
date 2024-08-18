import { Menu } from '../types/menu';

const tree: Menu[] = [
    {
        id: '1',
        label: 'Dashboard',
        url: '/dashboard',
    },
    {
        id: '2',
        label: 'Example',
        url: '/example',
    },
    {
        id: '3',
        label: 'Product',
        child: [
            {
                id: '4',
                label: 'Create Product',
                url: '/create-product',
            },
        ],
    },
];

export default tree;
