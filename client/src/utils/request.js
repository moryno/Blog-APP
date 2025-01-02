import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const requestService = axios.create({ baseURL: import.meta.env.VITE_API_URL });

requestService.interceptors.request.use(
  async (config) => {
    const { getToken } = useAuth();
    const token = await getToken();

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
requestService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response.status === 401 || response.status === 404) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export { requestService };
