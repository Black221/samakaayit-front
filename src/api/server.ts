import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const serverInstance: AxiosInstance = axios.create({
    // user api
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
});

// Request Interceptor
serverInstance.interceptors.request.use(
    (config) => {
        // Modify request before sending it (e.g., add authentication token)
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        // You can also log requests here
        console.log('Sending request:', config);
        
        return config; // Return the modified config or the original config
    },
    (error) => {
        // Handle request errors (e.g., logging)
        console.error('Error in request:', error);
        return Promise.reject(error); // Reject the promise with the error
    }
);

// Response Interceptor
serverInstance.interceptors.response.use(
    (response) => {
        // Process response before resolving the promise
        console.log('Received response:', response);
        return response; // Return the response or the processed response
    },
    (error) => {
        // Handle response errors globally
        if (error.response?.status === 401) {
            // For example, handle unauthorized access (401)
            console.warn('Unauthorized! Redirecting to login...');
            // You could redirect to login or logout the user
        }

        // You can also log errors here
        console.error('Error in response:', error);
        
        return Promise.reject(error); // Reject the promise with the error
    }
);

export default serverInstance;
