import axios from 'axios';

const generateApiClient = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'Application/json',
    },
  });

  const token = process.env.REACT_APP_API_TOKEN;
  instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  return instance;
};

export default generateApiClient;
