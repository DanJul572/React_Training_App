import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
    it('render component', () => {
        render(<App />);

        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
