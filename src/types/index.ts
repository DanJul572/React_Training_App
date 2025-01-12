export type ErrorResponseType = {
    error: string;
    statusCode: number;
};

export type SortType = 'asc' | 'desc';

export type MenuType = {
    child?: MenuType[];
    id: string;
    label: string;
    url?: string;
};

export type OptionType = {
    label: string;
    value: string;
};

type PaginationLinkType = {
    active: boolean;
    label: string;
    url: string | null;
};

export type PaginatedResponseType<T> = {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page_url: string;
    last_page: number;
    links: PaginationLinkType[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
};

export type ZConfirmationDialogPropsType = {
    cancelButton: string;
    confirmButton: string;
    content: string;
    onConfirm: () => void;
    open: boolean;
    title: string;
};
