import axios from 'axios';

export const apiServices = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}`,
  headers: {
    Authorization: `${process.env.REACT_APP_BACKEND_AUTH_KEY}`,
  },
});
