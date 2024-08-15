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
        label: 'Nested Menu',
        child: [
            {
                id: '4',
                label: 'Child Menu 1',
                url: '/',
            },
            {
                id: '5',
                label: 'Child Menu 2',
            },
        ],
    },
];

export default tree;
