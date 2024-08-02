import FolderOpen from '@mui/icons-material/FolderOpen';

const CollapseIcon = (props: React.PropsWithoutRef<typeof FolderOpen>) => {
    return <FolderOpen {...props} sx={{ opacity: 0.8 }} />;
};

export default CollapseIcon;
