import axios, { AxiosRequestHeaders } from 'axios';
import StorageUtils from '../../utils/Storage';

interface IHeaderConfig extends AxiosRequestHeaders {
    Authorization: string;
    Accept: string;
    AccessControlAllowOrigin: string;
    AccessControlAllowMethods: string;
    AccessControlAllowHeaders: string;
};

const core = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + '/'
});

core.interceptors.request.use(async config => {
  const access = await StorageUtils.getDataJwtToken();
  config.headers = {
      Authorization: `Bearer ${access?.access}`,
      Accept: 'application/json',
      AccessControlAllowOrigin: 'Origin',
      AccessControlAllowMethods: 'DELETE, POST, GET, OPTIONS',
      AccessControlAllowHeaders: "accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with",
      "ngrok-skip-browser-warning": "any"
  } as unknown as IHeaderConfig

  return config;
});

export default {
  core
};
