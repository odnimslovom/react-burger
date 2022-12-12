import {postOrderData} from "../burgerApiServicve";
import {setModal} from "./modal";
import {resetConstructor} from "./burger-constructor";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export const postOrder = (orderID) => async dispatch => {
  dispatch({type: POST_ORDER_SUCCESS});
  postOrderData(orderID)
    .then(data => {
      dispatch({type: POST_ORDER_SUCCESS, payload: data});
      dispatch(setModal(data, 'orderDetails'));
      dispatch(resetConstructor());
    })
    .catch((err) => {
      dispatch(POST_ORDER_FAILED);
      console.error(err);
    })
};
