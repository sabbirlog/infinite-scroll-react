import axios from "axios";

const apiEndpoint = "https://script-hill-api.vercel.app";

const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
