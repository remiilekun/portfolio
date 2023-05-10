import AXIOS from 'axios';
import CONFIG from '@/config';

export const axios = AXIOS.create({
  baseURL: CONFIG.CMS_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authentication: `Bearer ${CONFIG.CMS_ACCESS_TOKENL}`,
  },
});

export const getProjects = async () => {
  const { data } = await axios('/projects?populate=deep');
  return data.data;
};

export const getSkills = async () => {
  const { data } = await axios('/skills?populate=deep');
  return data.data;
};

export const getCompanies = async () => {
  const { data } = await axios('/companies?populate=deep');
  return data.data;
};

export const getBanner = async () => {
  const { data } = await axios('/banner?populate=deep');
  return data;
};

export const getAbout = async () => {
  const { data } = await axios('/about-section?populate=deep');
  return data;
};
