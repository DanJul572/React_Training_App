import Box from '@mui/material/Box';

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

import theme from '@/configs/theme';
import tree from '@/configs/tree';

import CollapseIcon from './components/CollapseIcon';
import EndIcon from './components/EndIcon';
import ExpandIcon from './components/ExpandIcon';
import MenuItem from './components/MenuItem';

const Sidebar = () => {
    return (
        <Box
            sx={{
                padding: '10px',
                flex: 1,
                borderRight: 1,
                borderColor: theme.palette.divider,
                overflowX: 'hidden',
            }}
        >
            <SimpleTreeView
                aria-label="customized"
                slots={{
                    expandIcon: ExpandIcon,
                    collapseIcon: CollapseIcon,
                    endIcon: EndIcon,
                }}
                sx={{
                    overflowX: 'hidden',
                    minHeight: 270,
                    flexGrow: 1,
                    maxWidth: 300,
                }}
            >
                {tree.map((item) => {
                    return <MenuItem key={item.id} tree={item} />;
                })}
            </SimpleTreeView>
        </Box>
    );
};

export default Sidebar;
