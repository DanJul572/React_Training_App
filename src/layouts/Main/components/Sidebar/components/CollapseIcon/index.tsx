import FolderOpen from '@mui/icons-material/FolderOpen';

import { iconStyle } from './styles';

const CollapseIcon = (props: React.PropsWithoutRef<typeof FolderOpen>) => {
    return <FolderOpen {...props} sx={iconStyle} />;
};

export default CollapseIcon;
