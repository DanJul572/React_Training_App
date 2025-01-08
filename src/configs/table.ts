import translator from '@/helpers/translator';
import { GridAutosizeOptions } from '@mui/x-data-grid/hooks/features/columnResize/gridColumnResizeApi';
import { GridLocaleText } from '@mui/x-data-grid/models/api';
import { MuiTablePaginationLocalizedProps } from '@mui/x-data-grid/models/api/gridLocaleTextApi';
import { GridDensity } from '@mui/x-data-grid/models/gridDensity';
import { GridFeatureMode } from '@mui/x-data-grid/models/gridFeatureMode';
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity';

const pageSize: number = 10;
const density: GridDensity = 'compact';
const pageSizeOptions: number[] = [10];
const filterDebounceMs: number = 1000;
const gridMode: GridFeatureMode = 'server';
const initialState: GridInitialStateCommunity = {
    pagination: {
        paginationModel: { page: 0, pageSize: pageSize },
    },
};
const autoSizeOption: GridAutosizeOptions = {
    includeOutliers: true,
};
const paginationLabels: MuiTablePaginationLocalizedProps = {
    labelDisplayedRows: ({ from, to, count }) => {
        return `${from}-${to} ${translator('of')} ${count !== -1 ? count : `${translator('more_than')} ${to}`}`;
    },
    getItemAriaLabel: (type) => {
        if (type === 'next') {
            return translator('next_page');
        }

        if (type === 'first') {
            return translator('first_page');
        }

        if (type === 'last') {
            return translator('last_page');
        }

        return translator('prev_page');
    },
};

const localeText: Partial<GridLocaleText> = {
    columnHeaderFiltersTooltipActive: (count) => {
        return `${count} ${translator('active_filter')}`;
    },
    checkboxSelectionHeaderName: translator('checkbox_selection'),
    columnHeaderSortIconLabel: translator('sort'),
    columnsManagementReset: translator('reset'),
    columnsManagementSearchTitle: translator('search'),
    columnsManagementShowHideAllText: translator('show_hide_all'),
    filterOperatorContains: translator('contains'),
    filterOperatorDoesNotContain: translator('does_not_contain'),
    filterOperatorDoesNotEqual: translator('does_not_equal'),
    filterOperatorEndsWith: translator('ends_with'),
    filterOperatorEquals: translator('equals'),
    filterOperatorIsAnyOf: translator('is_any_of'),
    filterOperatorIsEmpty: translator('is_empty'),
    filterOperatorIsNotEmpty: translator('is_not_empty'),
    filterOperatorStartsWith: translator('starts_with'),
    filterPanelColumns: translator('columns'),
    filterPanelDeleteIconLabel: translator('delete'),
    filterPanelInputLabel: translator('value'),
    filterPanelInputPlaceholder: translator('filter_value'),
    filterPanelOperator: translator('operator'),
    footerRowSelected: (count) => {
        return `${count} ${translator('selected_row')}`;
    },
    MuiTablePagination: paginationLabels,
    toolbarColumns: translator('columns'),
    toolbarColumnsLabel: translator('select_column'),
    toolbarFilters: translator('filters'),
    toolbarFiltersTooltipShow: translator('show_filer'),
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
