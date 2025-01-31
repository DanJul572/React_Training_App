import { ChangeEventHandler, useEffect, useState } from 'react';
import { GridFilterModel } from '@mui/x-data-grid';

import { PropsType } from './types';

const useToolbar = (props: PropsType) => {
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

    return {
        handleChange,
        searchTerm,
    };
};

export default useToolbar;
