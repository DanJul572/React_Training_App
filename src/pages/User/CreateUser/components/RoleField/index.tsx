import { Controller } from 'react-hook-form';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';
import ZSelect from '@/components/ZSelect';
import { OptionType } from '@/types';

const RoleField = (props: RenderFieldType) => {
    const options: OptionType[] = [
        {
            label: 'Admin',
            value: '1',
        },
        {
            label: 'User',
            value: '2',
        },
    ];

    return (
        <Controller
            name="role_id"
            control={props.control}
            render={({ field }) => (
                <ZSelect
                    {...field}
                    label={translator('role_id')}
                    options={options}
                />
            )}
        />
    );
};

export default RoleField;
