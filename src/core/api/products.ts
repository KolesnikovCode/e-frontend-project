import Axios from 'axios';
import baseUrl from './baseUrl';
import { baseApiUrl } from './baseApiUrl';
import { TProduct } from '../models/product';

const getProducts = () => Axios.get(`${baseUrl}/products`);
const getRealProducts = (): Promise<{ data: Array<TProduct> }> => Axios.get(`${baseApiUrl}/products`);

export default {
    getProducts,
    getRealProducts
}