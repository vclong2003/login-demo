import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "../config/api";
import { getUserToken } from "../utils/storageUtils";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getUserToken();
  console.log("Token", token);
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data.message);
  }
);
