export type MenuType = {
    id: string;
    label: string;
    child?: MenuType[];
    url?: string;
};
