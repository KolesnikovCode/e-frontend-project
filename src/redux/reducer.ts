import actionTypes from "./actionTypes";
import {
  EGenders,
  EConstitution,
  EEvent,
  ETone,
  EPrice
} from '../core/models/filters';
import { TAction } from '../core/models/action';

const initialState = {
  user: null,
  filters: {
    gender: EGenders.ANY,
    constitution: EConstitution.ANY,
    event: EEvent.ANY,
    tone: ETone.ANY,
    priceCategory: EPrice.ANY
  },
  products: [],
  modalStep: 0,
  isQuizFinished: false
};

export default function(state = initialState, action: TAction) {
  switch (action.type) {
    // FILTERS
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
    case actionTypes.SET_QUIZ_FINISHED:
      return {
        ...state,
        isQuizFinished: action.payload
      }
    // USER
    case actionTypes.SET_USER:
      return {
        ...state,
        user: {
          ...action.payload
        }
      }
    default:
      return state
  }
};
