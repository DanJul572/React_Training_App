import { describe, expect, it, vitest } from 'vitest';
import {
    render,
    waitFor,
    screen,
    act,
    fireEvent,
} from '@testing-library/react';

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

const handleChange: handleChangeType = vitest.fn();

const props: PropsType = {
    label: 'People',
    name: 'people',
    options: options,
    onChange: handleChange,
};

describe('ZAutoComplete', () => {
    it('render component and change value', async () => {
        const component = <ZAutoComplete {...props} />;

        render(component);

        const input = screen.getByTestId('zautocomplete');

        await waitFor(() => {
            expect(input).toBeInTheDocument();
        });

        const arrowButton = screen.getByTestId('ArrowDropDownIcon');

        await act(async () => {
            fireEvent.click(arrowButton);
        });

        const firstOption = screen.getByText(/Joe/i);

        await waitFor(() => {
            expect(firstOption).toBeInTheDocument();
        });

        await act(async () => {
            fireEvent.click(firstOption);
        });

        await waitFor(() => {
            expect(handleChange).toBeCalled();
        });
    });
});
