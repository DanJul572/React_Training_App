import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import { descriptionContainerStyle, descriptionStyle } from './styles';

import { PropsType } from './types';
import { Typography } from '@mui/material';

const Description = (props: PropsType) => {
  return (
    <Collapse
      in={props.expanded[props.item[props.id]]}
      sx={descriptionContainerStyle}
    >
      {props.columns.map((column, index) => {
        return (
          <Box key={index} sx={descriptionStyle}>
            <Typography variant="caption">{column.headerName}</Typography>
            <Typography variant="caption">
              {props.item[column.field]}
            </Typography>
          </Box>
        );
      })}
    </Collapse>
  );
};

export default Description;
