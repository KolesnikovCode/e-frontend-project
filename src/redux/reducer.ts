import actionTypes from "./actionTypes"
import {
  EGenders,
  EConstitution,
  EEvent,
  ETone,
  EPrice
} from '../models/filters'
import { TAction } from '../models/action'

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
  modalStep: 0
}

export default function(state = initialState, action: TAction) {
  switch (action.type) {
    // FILTERS
    case actionTypes.SET_GENDER:
      return {
        ...state,
        gender: action.payload
      }
    case actionTypes.SET_CONSTITUTION:
      return {
        ...state,
        constitution: action.payload
      }
    case actionTypes.SET_EVENT:
      return {
        ...state,
        event: action.payload
      }
    case actionTypes.SET_TONE:
      return {
        ...state,
        tone: action.payload
      }
    case actionTypes.SET_PRICE_CATEGORY:
      return {
        ...state,
        priceCategory: action.payload
      }
    default:
      return state
  }
}
