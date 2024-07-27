import { render, waitFor, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ZAutoComplete from '../../../components/ZAutoComplete';
import { Option, Props } from '../../../components/ZAutoComplete/types';

const options: Option[] = [
    {
        label: 'Joe',
        value: '1',
    },
    {
        label: 'Lily',
        value: '2',
    },
];

const props: Props = {
    label: 'People',
    name: 'people',
    options: options,
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
