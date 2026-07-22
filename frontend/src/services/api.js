import axios from "axios";

const api = axios.create({
    baseURL: "https://loglens-backend-swwd.onrender.com",
});

export default api;