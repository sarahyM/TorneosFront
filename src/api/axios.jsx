import axios from "axios";
const BASEURL = "http://localhost:3001";

export const axiosPriv  = axios.create({
    baseURL: BASEURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


export const axiosInstance = axios.create({
  baseURL: BASEURL,
});

export default axiosInstance;
