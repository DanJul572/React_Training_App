import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';

import theme from '@/configs/theme';

const EndIcon = (
    props: React.PropsWithoutRef<typeof InsertDriveFileOutlined>
) => {
    return (
        <InsertDriveFileOutlined
            {...props}
            sx={{ color: theme.palette.primary.main }}
        />
    );
};

export default EndIcon;
