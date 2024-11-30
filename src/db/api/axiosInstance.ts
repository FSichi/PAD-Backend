import axios from "axios";
import { envVars } from '../../constants/env.constants.ts';

const AXIOS_TIMEOUT = 30000;

export const AxiosInstance = axios.create({
  baseURL: envVars.apiStoreUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: AXIOS_TIMEOUT,
});