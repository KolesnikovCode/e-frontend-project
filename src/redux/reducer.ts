import actionTypes from "./actionTypes";
import {
  EGenders,
  EConstitution,
  EEvent,
  ETone,
  EPrice,
  ECategory
} from '../core/models/filters';
import { TAction } from '../core/models/action';
import { TProduct } from "../core/models/product";

const initialState = {
  user: null,
  filters: {
    category: ECategory.ANY,
    gender: EGenders.ANY,
    constitution: EConstitution.ANY,
    event: EEvent.ANY,
    tone: ETone.ANY,
    priceCategory: EPrice.ANY
  },
  products: [],
  modalStep: 0,
  isQuizFinished: false,
  showItemsInCatalogCount: 30,
  cartProducts: []
};

export default function(state: any = initialState, action: TAction) {
  switch (action.type) {
    // FILTERS
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload
        }
      }
    case actionTypes.SET_GENDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          gender: action.payload
        }
      }
    case actionTypes.SET_CONSTITUTION:
      return {
        ...state,
        filters: {
          ...state.filters,
          constitution: action.payload
        }
      }
    case actionTypes.SET_EVENT:
      return {
        ...state,
        filters: {
          ...state.filters,
          event: action.payload
        }
      }
    case actionTypes.SET_TONE:
      return {
        ...state,
        filters: {
          ...state.filters,
          tone: action.payload
        }
      }
    case actionTypes.SET_PRICE_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceCategory: action.payload
        }
      }
    case actionTypes.INCREMENT_MODAL_STEP:
      return {
        ...state,
        modalStep: state.modalStep + 1
      }
    case actionTypes.DECREMENT_MODAL_STEP:
      return {
        ...state,
        modalStep: state.modalStep - 1
      }
    case actionTypes.RESET_TO_DEFAULT_MODAL_STATE:
      return {
        ...state,
        filters: initialState.filters,
        modalStep: 0
      }
    case actionTypes.RESET_TO_DEFAULT_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
      }
    case actionTypes.SET_QUIZ_FINISHED:
      return {
        ...state,
        isQuizFinished: action.payload
      }
    // CATALOG
    case actionTypes.INCREMENT_SHOW_ITEMS_IN_CATALOG:
      return {
        ...state,
        showItemsInCatalogCount: state.showItemsInCatalogCount + 30
      }
    case actionTypes.RESET_SHOW_ITEMS_IN_CATALOG:
      return {
        ...state,
        showItemsInCatalogCount: 30
      }
    // USER
    case actionTypes.SET_USER:
      return {
        ...state,
        user: {
          ...action.payload
        }
      }

    // PRODUCTS
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.ADD_PRODUCT_IN_THE_CART:
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          action.payload
        ]
      }

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartProducts: []
      }
    
    case actionTypes.RESTORE_CART_FROM_LOCAL_STORAGE_IDS:
      return {
        ...state,
        cartProducts: state.products.filter((prod: TProduct) => action.payload.some((idFromSessStor: string) => idFromSessStor === prod._id))
      }
    default:
      return state
  }
};
