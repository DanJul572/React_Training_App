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

export type AlertPropsType = {
    message: string | null;
    open: boolean;
    type: 'error' | 'success';
};

export type UserType = {
    email_verified_at: string;
    email: string;
    id: number;
    name: string;
    role_id: number;
};

export type ProductType = {
    category_id: number;
    created_at: string;
    id: number;
    image: string | null;
    name: string;
    price_1: number;
    price_2: number;
    size: string;
    stock: number;
    surface: string;
    type: string;
    updated_at: string;
};

export type CategoryType = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};
