import Folder from '@mui/icons-material/Folder';

import theme from '../../../../../configs/theme';

const ExpandIcon = (props: React.PropsWithoutRef<typeof Folder>) => {
    return (
        <Folder {...props} sx={{ color: theme.palette.primary.main }} />
    );
};

export default ExpandIcon;
