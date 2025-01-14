import axios, { AxiosRequestConfig } from 'axios';

const url = import.meta.env.VITE_API_URL;

const getConfig = (): AxiosRequestConfig => {
    const token = localStorage.getItem('token');
    const config: AxiosRequestConfig = {};
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
        };
    }
    return config;
};

const get = async <T>(endpoint: string): Promise<T> => {
    const response = await axios.get<T>(url + endpoint, getConfig());
    return response.data;
};

const post = async <TResponse, TBody>(
    endpoint: string,
    body: TBody
): Promise<TResponse> => {
    const response = await axios.post<TResponse>(
        url + endpoint,
        body,
        getConfig()
    );
    return response.data;
};

const remove = async <T>(endpoint: string): Promise<T> => {
    const response = await axios.delete<T>(url + endpoint, getConfig());
    return response.data;
};

const put = async <T>(endpoint: string, body: T): Promise<T> => {
    const response = await axios.put<T>(url + endpoint, body, getConfig());
    return response.data;
};

const request = {
    get,
    post,
    put,
    remove,
};

export default request;
