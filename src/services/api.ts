import axios from 'axios';
import CONFIG from '@/config';

const instance = axios.create({
  baseURL: CONFIG.CMS_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authentication: `Bearer ${CONFIG.CMS_ACCESS_TOKENL}`,
  },
});

export default instance;
