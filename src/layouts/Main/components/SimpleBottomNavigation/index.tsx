import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2 from '@mui/icons-material/Inventory2';
import Person from '@mui/icons-material/Person';
import PointOfSale from '@mui/icons-material/PointOfSale';

import translator from '@/helpers/translator';

import useSimpleBottomNavigation from './hooks';
import isAdmin from '@/helpers/isAdmin';

export default function SimpleBottomNavigation() {
    const { navigate, getActivePath } = useSimpleBottomNavigation();

    return (
        <Box
            sx={{ marginTop: '-65px' }}
            className="SimpleBottomNavigation"
        >
            <BottomNavigation showLabels value={getActivePath()}>
                <BottomNavigationAction
                    onClick={() => navigate('/')}
                    label={translator('dashboard')}
                    icon={<DashboardIcon />}
                />
                <BottomNavigationAction
                    onClick={() => navigate('/product')}
                    label={translator('product')}
                    icon={<Inventory2 />}
                />
                {isAdmin && (
                    <BottomNavigationAction
                        onClick={() => navigate('/transaction')}
                        label={translator('transaction')}
                        icon={<PointOfSale />}
                    />
                )}
                {isAdmin && (
                    <BottomNavigationAction
                        onClick={() => navigate('/user')}
                        label={translator('user')}
                        icon={<Person />}
                    />
                )}
            </BottomNavigation>
        </Box>
    );
}
