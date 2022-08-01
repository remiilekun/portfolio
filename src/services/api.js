import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CMS_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authentication: `Bearer ${process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN}`,
  },
});

export default instance;
