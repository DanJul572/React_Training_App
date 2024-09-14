import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import StoryBook from '@/layouts/StoryBook';

describe('StoryBook Layout', () => {
    it('render component', () => {
        render(
            <StoryBook>
                <h1>Hello</h1>
            </StoryBook>
        );
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
});
