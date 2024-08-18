import TextField from '@mui/material/TextField';

import { RenderField } from '../types';

const LabelField = ({ field }: RenderField<'label'>) => {
    return <TextField {...field} label="Label" />;
};

export default LabelField;
