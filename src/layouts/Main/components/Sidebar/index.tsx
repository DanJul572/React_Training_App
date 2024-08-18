import Box from '@mui/material/Box';

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

import tree from '@/configs/tree';

import CollapseIcon from './components/CollapseIcon';
import EndIcon from './components/EndIcon';
import ExpandIcon from './components/ExpandIcon';
import MenuItem from './components/MenuItem';
import { containerStyle, treeViewStyle } from './styles';

const Sidebar = () => {
    return (
        <Box sx={containerStyle}>
            <SimpleTreeView
                aria-label="customized"
                slots={{
                    expandIcon: ExpandIcon,
                    collapseIcon: CollapseIcon,
                    endIcon: EndIcon,
                }}
                sx={treeViewStyle}
            >
                {tree.map((item) => {
                    return <MenuItem key={item.id} tree={item} />;
                })}
            </SimpleTreeView>
        </Box>
    );
};

export default Sidebar;
