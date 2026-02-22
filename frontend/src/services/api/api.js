import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: `${BASE_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
