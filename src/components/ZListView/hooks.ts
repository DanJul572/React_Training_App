import { ChangeEventHandler, useEffect, useState } from 'react';
import { GridFilterModel } from '@mui/x-data-grid';

import { PropsType } from '../ZTable/types';

const useZListView = (props: PropsType) => {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const [page, setPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    useEffect(() => {
        if (typeof searchTerm === 'string') {
            const timerId = setTimeout(() => {
                const filterFormat: GridFilterModel = {
                    items: [],
                    quickFilterValues: [searchTerm],
                };
                if (props.onFilter) {
                    props.onFilter(filterFormat);
                }
            }, 1000);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [searchTerm]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleExpand = (id: number) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return {
        expanded,
        handleChange,
        page,
        searchTerm,
        setPage,
        toggleExpand,
    };
};

export default useZListView;
