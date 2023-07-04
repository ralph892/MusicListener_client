import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

export const get = async (path = '', optional = {}) => {
    const response = await request.get(path,optional);
    return response.data;
};

export default request;