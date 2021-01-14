import { TUser } from '../core/models/user';
import actionTypes from "./actionTypes";
import { TAction } from '../core/models/action';
import { TProduct } from '../core/models/product';

// FILTERS
export const setCategory = (category: string): TAction => {
  return {
    type: actionTypes.SET_CATEGORY,
    payload: category
  }
};
export const setGender = (gender: string): TAction => {
  return {
    type: actionTypes.SET_GENDER,
    payload: gender
  }
};
export const setConstitution = (constitution: string): TAction => {
  return {
    type: actionTypes.SET_CONSTITUTION,
    payload: constitution
  }
};
export const setEvent = (event: string): TAction => {
  return {
    type: actionTypes.SET_EVENT,
    payload: event
  }
};
export const setTone = (tone: string): TAction => {
  return {
    type: actionTypes.SET_TONE,
    payload: tone
  }
};
export const setPriceCategory = (priceGroup: string): TAction => {
  return {
    type: actionTypes.SET_PRICE_CATEGORY,
    payload: priceGroup
  }
};
export const setFilters = (filters: Object): TAction => {
  return {
    type: actionTypes.SET_FILTERS,
    payload: filters
  }
}
export const resetToDefaultFilters = (): TAction => {
  return {
    type: actionTypes.RESET_TO_DEFAULT_FILTERS
  }
};

// QUIZ FILTERS
export const setQuizCategory = (category: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_CATEGORY,
    payload: category
  }
};
export const setQuizGender = (gender: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_GENDER,
    payload: gender
  }
};
export const setQuizConstitution = (constitution: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_CONSTITUTION,
    payload: constitution
  }
};
export const setQuizEvent = (event: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_EVENT,
    payload: event
  }
};
export const setQuizTone = (tone: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_TONE,
    payload: tone
  }
};
export const setQuizPriceCategory = (priceGroup: string): TAction => {
  return {
    type: actionTypes.SET_QUIZ_PRICE_CATEGORY,
    payload: priceGroup
  }
};
export const setQuizFinished = (value: boolean): TAction => {
  return {
    type: actionTypes.SET_QUIZ_FINISHED,
    payload: value
  }
};
export const resetToDefaultQuizFilters = (): TAction => {
  return {
    type: actionTypes.RESET_TO_DEFAULT_QUIZ_FILTERS
  }
};
// QUIZ MODAL
export const incrementModalStep = (): TAction => {
  return {
    type: actionTypes.INCREMENT_MODAL_STEP
  }
};
export const decrementModalStep = (): TAction => {
  return {
    type: actionTypes.DECREMENT_MODAL_STEP
  }
};
export const resetToDefaultModalState = (): TAction => {
  return {
    type: actionTypes.RESET_TO_DEFAULT_MODAL_STATE
  }
};

// USER
export const setUser = (user: TUser | any): TAction => {
  return {
    type: actionTypes.SET_USER,
    payload: user
  }
};

// PRODUCTS
export const setProducts = (products: Array<TProduct>): TAction => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
  }
};

// CATALOG
export const incrementShowItemsInCatalog = (): TAction => {
  return {
    type: actionTypes.INCREMENT_SHOW_ITEMS_IN_CATALOG
  }
};
export const resetShowItemsInCatalog = (): TAction => {
  return {
    type: actionTypes.RESET_SHOW_ITEMS_IN_CATALOG
  }
};

// CART
export const addProductInTheCart = (product: TProduct): TAction => {
  return {
    type: actionTypes.ADD_PRODUCT_IN_THE_CART,
    payload: product
  }
};
export const removeProductFromCart = (product: TProduct): TAction => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: product
  }
};
export const restoreCartFromLocalStorageIds = (ids: Array<string>) => {
  return {
    type: actionTypes.RESTORE_CART_FROM_LOCAL_STORAGE_IDS,
    payload: ids
  }
};
export const clearCart = (): TAction => {
  return {
    type: actionTypes.CLEAR_CART
  }
};
