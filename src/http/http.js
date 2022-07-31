import axios from "axios";
import { authInterceptor, requestErrorHandler } from "./requestInterceptors";
import { responseErrorHandler, responseParser } from "./responseInterceptors";

const BASE_URL = process.env.REACT_APP_API_URL;

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

http.interceptors.request.use(authInterceptor, requestErrorHandler);
http.interceptors.response.use(responseParser, responseErrorHandler);

export default http;
