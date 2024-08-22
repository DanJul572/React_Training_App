import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';

import { iconStyle } from './styles';

const EndIcon = (
    props: React.PropsWithoutRef<typeof InsertDriveFileOutlined>
) => {
    return <InsertDriveFileOutlined {...props} sx={iconStyle} />;
};

export default EndIcon;
