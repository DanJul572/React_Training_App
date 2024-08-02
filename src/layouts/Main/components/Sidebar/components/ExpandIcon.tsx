import Folder from '@mui/icons-material/Folder';

const ExpandIcon = (props: React.PropsWithoutRef<typeof Folder>) => {
    return <Folder {...props} sx={{ opacity: 0.8 }} />;
};

export default ExpandIcon;
