import { describe, expect, it, vitest } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

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
        render(<ZAutoComplete {...props} />);

        const input = screen.getByTestId('zautocomplete');
        expect(input).toBeInTheDocument();

        const arrowButton = screen.getByTestId('ArrowDropDownIcon');
        fireEvent.click(arrowButton);
        const firstOption = screen.getByText(/Joe/i);
        expect(firstOption).toBeInTheDocument();

        fireEvent.click(firstOption);
        expect(handleChange).toBeCalled();
    });
});
