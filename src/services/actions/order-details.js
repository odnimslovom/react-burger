import {postOrderData} from "../burgerApiServicve";
import {setModal} from "./modal";

export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export const postOrder = (orderID) => async dispatch => {
  postOrderData(orderID)
    .then(data => {
      dispatch({type: 'POST_ORDER_SUCCESS', payload: data});
      dispatch(setModal(data, 'orderDetails'));
    })
    .then((err) => {
      dispatch({type: 'POST_ORDER_FAILED'});
      console.error(err);
    })
};
