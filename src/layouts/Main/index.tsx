import Box from '@mui/material/Box';

import { ZAlert } from '@/context/ZAlert';
import { ZConfirmationDialog } from '@/context/ZConfirmationDialog';
import { ZLoader } from '@/context/ZLoader';

import Sidebar from './components/Sidebar';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Topbar from './components/Topbar';

import { PropsType } from './types';

import {
  containerStyle,
  contentStyle,
  sidebarAndContentStyle,
} from './styles';
import { ProductTableProperty } from '@/context/ProductTableProperty';

const Main = (props: PropsType) => {
  return (
    <Box sx={containerStyle}>
      <ZLoader>
        <ZConfirmationDialog>
          <ProductTableProperty>
            <Topbar />
            <Box sx={sidebarAndContentStyle}>
              <Sidebar />
              <Box sx={contentStyle}>
                <ZAlert>{props.children}</ZAlert>
              </Box>
            </Box>
            <SimpleBottomNavigation />
          </ProductTableProperty>
        </ZConfirmationDialog>
      </ZLoader>
    </Box>
  );
};

export default Main;
