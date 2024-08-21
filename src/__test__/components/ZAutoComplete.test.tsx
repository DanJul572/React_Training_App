import { describe, expect, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';

import { OptionType } from '@/types/option';
import {
    handleChangeType,
    PropsType,
} from '@/components/ZAutoComplete/types';

import ZAutoComplete from '@/components/ZAutoComplete';

const options: OptionType[] = [
    {
        label: 'Joe',
        value: '1',
    },
    {
        label: 'Lily',
        value: '2',
    },
];

const handleChange: handleChangeType = (event, value) => {
    console.log(event, value);
};

const props: PropsType = {
    label: 'People',
    name: 'people',
    options: options,
    onChange: handleChange,
};

describe('ZAutoComplete', () => {
    it('render component', async () => {
        const component = <ZAutoComplete {...props} />;
        render(component);

        await waitFor(() => {
            expect(
                screen.getByRole('combobox', {
                    name: /people/i,
                })
            ).toBeInTheDocument();
        });
    });
});
