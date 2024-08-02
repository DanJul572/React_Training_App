import { Menu } from "../types/menu";

const tree: Menu[] = [
    {
        id: '1',
        label: 'Parent 1'
    },
    {
        id: '2',
        label: 'Parent 2',
        child: [
            {
                id: '3',
                label: 'Child 1'
            },
            {
                id: '4',
                label: 'Child 2',
                child: [
                    {
                        id: '5',
                        label: 'Grand Child 1'
                    },
                    {
                        id: '6',
                        label: 'Grand Child 1'
                    }
                ]
            }
        ]
    },
    {
        id: '7',
        label: 'Parent 3'
    },
];

export default tree