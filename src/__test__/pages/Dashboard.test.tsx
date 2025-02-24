import { expect, it, describe, vi, Mocked, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import Dashboard from '@/pages/Dashboard';
import translator from '@/helpers/translator';

vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

describe('Dashboard Page', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                userCount: 10,
                productCount: 5,
            },
        });

        mockedAxios.get.mockResolvedValueOnce({
            data: {
                count: 0,
                rows: [],
            },
        });
    });

    it('renders component', () => {
        render(<Dashboard />);
        const cardUser = screen.getAllByText(translator('user'));
        expect(cardUser[0]).toBeInTheDocument();
    });

    it('renders CardList component', () => {
        render(<Dashboard />);
        const cardProduct = screen.getAllByText(translator('product'));
        expect(cardProduct[0]).toBeInTheDocument();
    });

    it('renders TransactionList component', () => {
        render(<Dashboard />);
        const transactionListTitle = screen.getByText(
            translator('transaction_list')
        );
        expect(transactionListTitle).toBeInTheDocument();
    });
});
