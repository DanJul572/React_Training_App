import { CSSProperties } from 'react';

import theme from '@/configs/theme';

export const containerStyle: CSSProperties = {
    color: theme.palette.primary.main,
    gap: '10px',
    zIndex: theme.zIndex.drawer + 1,
};
