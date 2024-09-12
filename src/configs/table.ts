import translator from '@/helpers/translator';
import { GridAutosizeOptions } from '@mui/x-data-grid/hooks/features/columnResize/gridColumnResizeApi';
import { GridLocaleText } from '@mui/x-data-grid/models/api';
import { GridDensity } from '@mui/x-data-grid/models/gridDensity';
import { GridFeatureMode } from '@mui/x-data-grid/models/gridFeatureMode';
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity';

const pageSize: number = 5;
const density: GridDensity = 'compact';
const initialState: GridInitialStateCommunity = {
    pagination: {
        paginationModel: { page: 0, pageSize: pageSize },
    },
};
const autoSizeOption: GridAutosizeOptions = {
    includeOutliers: true,
};
const pageSizeOptions: number[] = [5];
const filterDebounceMs: number = 1000;
const gridMode: GridFeatureMode = 'server';

const localeText: Partial<GridLocaleText> = {
    toolbarFilters: translator('filters'),
    toolbarColumns: translator('columns'),
};

const table = {
    autoSizeOption,
    density,
    filterDebounceMs,
    gridMode,
    initialState,
    pageSizeOptions,
    localeText,
};

export default table;
