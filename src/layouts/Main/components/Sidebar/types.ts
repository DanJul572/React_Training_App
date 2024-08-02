export type Menu = {
    id: string;
    label: string;
    child?: Menu[]
}

export type Props = {
    tree: Menu;
};