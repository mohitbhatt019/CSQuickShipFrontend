/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
import userGlobalConfig from "../constants/globalConfig";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: undefined,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // if token required then read the login token (ACCESS TOKEN) and pass that to headers
    const token = localStorage.getItem(userGlobalConfig.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("error from token instance ", error.response);
      // if api return 401 then we will logout the user
      // DeviceEventEmitter.emit('AuthorizationExpired', 'ERR_USER_ROLE_CHANGED')
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
