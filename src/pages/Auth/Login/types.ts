import { User } from '@/types';

export type LoginFormType = {
    email: string;
    password: string;
};

export type LoginResponseType = {
    token: string;
    user: User;
};
