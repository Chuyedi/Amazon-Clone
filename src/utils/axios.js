import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://amazon-api-1-6mx0.onrender.com",
  // baseURL: "http://127.0.0.1:5000"
});
