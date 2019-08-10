import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';

const apiClient = async (method, url, { ...rest }) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      // SECURE_PASS: Config.SECURE_PASS,
    },
  });
  const config = {
    method,
    url,
    response: 'json',
    ...rest,
  };
  const response = await instance.request(config);

  return response;
};

export default apiClient;
