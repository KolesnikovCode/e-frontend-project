import Axios from 'axios';
import baseUrl from './baseUrl';

const getLooks = () => Axios.get(`${baseUrl}/looks`);
const getOne = (id: number) => Axios.get(`${baseUrl}/looks/${id}`);

export default {
  getLooks,
  getOne
}