import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const get = async <T>(endpoint: string): Promise<T> => {
    const response = await axios.get<T>(url + endpoint);
    return response.data;
};

const post = async <T>(endpoint: string, body: T): Promise<T> => {
    const response = await axios.post<T>(url + endpoint, body);
    return response.data;
};

const remove = async <T>(endpoint: string): Promise<T> => {
    const response = await axios.delete<T>(url + endpoint);
    return response.data;
};

const put = async <T>(endpoint: string, body: T): Promise<T> => {
    const response = await axios.put<T>(url + endpoint, body);
    return response.data;
};

const request = {
    get,
    post,
    put,
    remove,
};

export default request;
