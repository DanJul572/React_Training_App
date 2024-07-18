import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import App from '../App';

test('Renders App Component', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
});
