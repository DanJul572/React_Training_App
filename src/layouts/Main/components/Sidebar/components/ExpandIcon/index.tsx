import Folder from '@mui/icons-material/Folder';

import { iconStyle } from './styles';

const ExpandIcon = (props: React.PropsWithoutRef<typeof Folder>) => {
    return <Folder {...props} sx={iconStyle} />;
};

export default ExpandIcon;
