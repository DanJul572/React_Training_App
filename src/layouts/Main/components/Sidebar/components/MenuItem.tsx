import { styled, alpha } from '@mui/material/styles';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

import { Props } from '../types';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(0.2, 0),
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
}));

const MenuItem = (props: Props) => {
    if (!props.tree.child) {
        return (
            <CustomTreeItem
                key={props.tree.id}
                itemId={props.tree.id}
                label={props.tree.label}
            />
        );
    }

    return (
        <CustomTreeItem
            key={props.tree.id}
            itemId={props.tree.id}
            label={props.tree.label}
        >
            {props.tree.child.map((item) => {
                return <MenuItem key={item.id} tree={item} />;
            })}
        </CustomTreeItem>
    );
};

export default MenuItem;
