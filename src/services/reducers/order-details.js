import {POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS} from "../actions/order-details";

const initialState = {
  orderInfo: {
    name: '',
    order: {
      number: null
    },
    success: false,
    message: ''
  },
  isLoading: false,
  hasError: false
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        orderInfo: action.payload,
        isLoading: false,
      }
    case POST_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state;
  }
}
