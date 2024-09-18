import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const post = async <T>(endpoint: string, body: T): Promise<T> => {
    const response = await axios.post<T>(url + endpoint, body);
    return response.data;
};

const request = {
    post,
};

export default request;
