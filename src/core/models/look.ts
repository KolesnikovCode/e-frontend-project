import { fromJS } from "immutable";
import { TProduct } from './product';

export type TLook = {
  id: number;
  name: string;
  description?: string;
  gender: string;
  constitution: string;
  event: string;
  tone: string;
  priceCategory: string;
  mainProducts: {
    topProduct: TProduct;
    bottomProduct: TProduct;
    shoesProduct: TProduct;
    accessoryProduct?: TProduct;
  };
  additionalProducts?: {
    additionalAccessory?: TProduct;
    additionalTop?: TProduct;
  };
  price: string;
  isBookmarkedLook: boolean;
  isLikedLook: boolean;
};
