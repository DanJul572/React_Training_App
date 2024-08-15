import { expect, describe, it } from 'vitest';

import translator from '@/helpers/translator';

describe('theme', () => {
    it('render', () => {
        const text: string = translator('hello');

        expect(text).toEqual('Hello');
    });
});
