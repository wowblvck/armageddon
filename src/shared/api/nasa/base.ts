import { API_KEY, BASE_URL } from '@shared/config';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});
