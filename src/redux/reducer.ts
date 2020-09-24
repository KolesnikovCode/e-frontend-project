import actionTypes from "./actionTypes";
import I from "immutable";

export type Action = {
  type: string;
  data: any;
};

export default function(state = I.Map(), action: Action) {
  console.log("prevStore(from reducer.ts) = ", state.toJS());
  switch (action.type) {
    case actionTypes.SET_COUNTER: {
      return state.set("counter", action.data);
    }
    default:
      return state;
  }
}
