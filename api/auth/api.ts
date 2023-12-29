import axios from 'axios';
import StorageUtils from '../../utils/Storage';

const auth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + 'auth/'
});

auth.interceptors.response.use(
  resp => resp,
  async error => {
    if (error.response.status === 401) {
      try {
        StorageUtils.deleteDataJwtToken();
        return;
      } catch (e) {
        console.log('error refresh', e);
      }
      return error.response.data.detail
    }
    return error;
  }
);

export default auth;