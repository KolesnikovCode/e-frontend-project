import actionTypes from "./actionTypes"
import { TAction } from '../models/action'

export const setGender = (gender: string): TAction => {
  return {
    type: actionTypes.SET_GENDER,
    payload: gender
  }
}

export const setConstitution = (constitution: string): TAction => {
  return {
    type: actionTypes.SET_CONSTITUTION,
    payload: constitution
  }
}

export const setEvent = (event: string): TAction => {
  return {
    type: actionTypes.SET_EVENT,
    payload: event
  }
}


export const setTone = (tone: string): TAction => {
  return {
    type: actionTypes.SET_TONE,
    payload: tone
  }
}

export const setPriceCategory = (priceGroup: string): TAction => {
  return {
    type: actionTypes.SET_PRICE_CATEGORY,
    payload: priceGroup
  }
}
