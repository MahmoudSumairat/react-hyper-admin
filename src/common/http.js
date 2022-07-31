import axios from "axios";
import { authInterceptor } from "./httpInterceptors";

const BASE_URL = "https://localhost:3000/api/"; // To be replaced with the actual base url stored in the env

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

http.interceptors.request.use(authInterceptor);

export default http;
