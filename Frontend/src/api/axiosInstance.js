import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4001',
    headers: {
        'Content-Type': 'application/json',
    },
});

// We can add interceptors here later if we implement JWT authentication
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling
        return Promise.reject(error);
    }
);

export default api;
