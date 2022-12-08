import {POST_ORDER_DETAILS} from "../actions/order-details";

const initialState = {
  name: '',
  order: {
    number: null
  },
  success: false
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        order: action.payload.order,
        success: action.payload.success
      }
    default:
      return state;
  }
}
