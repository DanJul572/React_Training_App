export type ProductType = {
    id: number;
    colorCode: string;
    image: string | null;
    name: string;
    size: number;
    stock: number;
    surface: string;
    type: string;
    created_at: string;
    updated_at: string;
};

export type OnLoadType = (
    page: number,
    quickFilter?: string | null
) => void;

export type GetUrlType = (
    page: number,
    quickFilter?: string | null
) => string;

export type DisplayDataType = {
    rows: ProductType[];
    count: number;
    quickFilter?: string | null;
    page: number;
};
