// import actionTypes from "./actionTypes"

export type Action = {
  type: string
  data: any
}

const initialState = {
  products: []
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state
  }
}
