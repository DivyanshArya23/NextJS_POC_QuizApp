import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.DOMAIN}/api`,
});

export default axiosInstance;
