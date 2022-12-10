import {POST_ORDER_FAILED, POST_ORDER_SUCCESS} from "../actions/order-details";

const initialState = {
  orderInfo: {
    name: '',
    order: {
      number: null
    },
    success: false,
    message: ''
  }
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        orderInfo: action.payload
      }
    case POST_ORDER_FAILED:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message
      }
    default:
      return state;
  }
}
