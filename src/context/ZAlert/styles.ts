import { CSSProperties } from 'react';

import theme from '@/configs/theme';

export const containerStyle: CSSProperties = {
    color: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
    gap: '10px',
};
