import FolderOpen from '@mui/icons-material/FolderOpen';

import theme from '@/configs/theme';

const CollapseIcon = (props: React.PropsWithoutRef<typeof FolderOpen>) => {
    return (
        <FolderOpen
            {...props}
            sx={{ color: theme.palette.primary.main }}
        />
    );
};

export default CollapseIcon;
