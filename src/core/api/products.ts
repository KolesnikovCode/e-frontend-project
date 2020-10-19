import Axios from 'axios';
import baseUrl from './baseUrl';

const getProducts = () => Axios.get(`${baseUrl}/products`);

export default {
  getProducts
}