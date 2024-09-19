import { describe, expect, it, vitest } from 'vitest';
import request from '@/helpers/request';
import axios from 'axios';

vitest.mock('axios');

describe('request', () => {
    describe('post', () => {
        it('should call axios.post with the correct URL and body', async () => {
            const mockData = { success: true };
            const endpoint = '/test-endpoint';
            const body = { key: 'value' };

            axios.post = vitest.fn().mockResolvedValueOnce({
                data: mockData,
            });

            const result = await request.post(endpoint, body);

            expect(axios.post).toHaveBeenCalledWith(
                `${import.meta.env.VITE_API_URL}${endpoint}`,
                body
            );
            expect(result).toEqual(mockData);
        });

        it('should throw an error if axios.post fails', async () => {
            const endpoint = '/test-endpoint';
            const body = { key: 'value' };
            const errorMessage = 'Network Error';

            axios.post = vitest
                .fn()
                .mockRejectedValueOnce(new Error(errorMessage));

            await expect(request.post(endpoint, body)).rejects.toThrow(
                errorMessage
            );
        });
    });
});
