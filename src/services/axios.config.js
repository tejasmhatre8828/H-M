import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
});

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");

//         // Add token only when available
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // RESPONSE INTERCEPTOR (optional but useful)
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             // Only show message if user IS logged in
//             const token = localStorage.getItem("token");
//             if (token) {
//                 console.warn("Unauthorized request");
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default api;