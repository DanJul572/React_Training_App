import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import App from '../App';

describe('App', () => {
    it('render component', () => {
        render(<App />);

        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
