import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const LabelField = ({ field }: RenderFieldType<'label'>) => {
    return <TextField {...field} label="Label" />;
};

export default LabelField;
