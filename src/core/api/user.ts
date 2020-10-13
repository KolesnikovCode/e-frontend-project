import Axios from 'axios';
import baseUrl from './baseUrl';

const getUser = () => {
  return Axios.get(`${baseUrl}/user`);
}

export default {
  getUser
}