import actionTypes from "./actionTypes";
import { Action } from "./reducer";

export type ISetCounter = (count: number) => Action;
export const setCounter: ISetCounter = (count) => ({
  type: actionTypes.SET_COUNTER,
  data: count
});
