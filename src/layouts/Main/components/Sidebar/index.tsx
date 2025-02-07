import Box from '@mui/material/Box';

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

import tree from '@/configs/tree';

import CollapseIcon from './components/CollapseIcon';
import EndIcon from './components/EndIcon';
import ExpandIcon from './components/ExpandIcon';
import MenuItem from './components/MenuItem';

import useSidebar from './hooks';
import { containerStyle, treeViewStyle } from './styles';

const Sidebar = () => {
    const { isMobileOrTab, getActivePath } = useSidebar();

    if (isMobileOrTab) {
        return false;
    }

    return (
        <Box sx={containerStyle} className="sidebar">
            <SimpleTreeView
                aria-label="customized"
                slots={{
                    expandIcon: ExpandIcon,
                    collapseIcon: CollapseIcon,
                    endIcon: EndIcon,
                }}
                sx={treeViewStyle}
                selectedItems={getActivePath()}
            >
                {tree.map((item) => {
                    return <MenuItem key={item.id} tree={item} />;
                })}
            </SimpleTreeView>
        </Box>
    );
};

export default Sidebar;
