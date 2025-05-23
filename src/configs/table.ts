import translator from '@/helpers/translator';
import {
  GridAutosizeOptions,
  GridDensity,
  GridFeatureMode,
  GridInitialState,
  GridLocaleText,
} from '@mui/x-data-grid';

type TableConfig = {
  autoSizeOption: GridAutosizeOptions;
  density: GridDensity;
  filterDebounceMs: number;
  gridMode: GridFeatureMode;
  initialState: GridInitialState;
  localeText: Partial<GridLocaleText>;
  pageSize: number;
  pageSizeOptions: number[];
};

const pageSize: number = 10;
const density: GridDensity = 'compact';
const pageSizeOptions: number[] = [10];
const filterDebounceMs: number = 1000;
const gridMode: GridFeatureMode = 'server';
const initialState: GridInitialState = {
  pagination: {
    paginationModel: { page: 0, pageSize: pageSize },
  },
};
const autoSizeOption: GridAutosizeOptions = {
  includeOutliers: true,
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
  noRowsLabel: translator('no_row'),
  toolbarColumns: translator('columns'),
  toolbarColumnsLabel: translator('select_column'),
  toolbarFilters: translator('filters'),
  toolbarFiltersTooltipShow: translator('show_filer'),
  toolbarQuickFilterPlaceholder: `${translator('search')}...`,
  paginationRowsPerPage: translator('rows_per_page'), // Label before page size selector
  paginationItemAriaLabel: (type) => {
    switch (type) {
      case 'first':
        return translator('first_page');
      case 'last':
        return translator('last_page');
      case 'next':
        return translator('next_page');
      default:
        return translator('prev_page');
    }
  },
  paginationDisplayedRows: ({ from, to, count }) => {
    return `${from}-${to} ${translator('of')} ${count !== -1 ? count : `${translator('more_than')} ${to}`}`;
  },
};

const table: TableConfig = {
  autoSizeOption,
  density,
  filterDebounceMs,
  gridMode,
  initialState,
  localeText,
  pageSize,
  pageSizeOptions,
};

export default table;
