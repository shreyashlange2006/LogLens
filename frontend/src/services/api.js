import axios from "axios";

const api = axios.create({
    baseURL: "https://loglens-production.up.railway.app",
});

export default api;