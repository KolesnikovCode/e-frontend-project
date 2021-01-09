import { TUser } from '../core/models/user';
import actionTypes from "./actionTypes";
import { TAction } from '../core/models/action';
import { TProduct } from '../core/models/product';

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

export const resetToDefaultFilters = (): TAction => {
  return {
    type: actionTypes.RESET_TO_DEFAULT_FILTERS
  }
};

export const setUser = (user: TUser | any): TAction => {
  return {
    type: actionTypes.SET_USER,
    payload: user
  }
}

export const setQuizFinished = (value: boolean): TAction => {
  return {
    type: actionTypes.SET_QUIZ_FINISHED,
    payload: value
  }
}

export const setProducts = (products: Array<TProduct>): TAction => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
  }
}

export const incrementShowItemsInCatalog = (): TAction => {
  return {
    type: actionTypes.INCREMENT_SHOW_ITEMS_IN_CATALOG
  }
}

export const resetShowItemsInCatalog = (): TAction => {
  return {
    type: actionTypes.RESET_SHOW_ITEMS_IN_CATALOG
  }
}
