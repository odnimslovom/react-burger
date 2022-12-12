import {getAppData} from "../burgerApiServicve";

export const GET_APPDATA_REQUEST = 'GET_APPDATA_REQUEST';
export const GET_APPDATA_SUCCESS = 'GET_APPDATA_SUCCESS';
export const GET_APPDATA_FAILED = 'GET_APPDATA_FAILED';

export const getIngredients = () => dispatch => {
  dispatch({type: GET_APPDATA_REQUEST});
  getAppData()
    .then(data => {
      dispatch({type: GET_APPDATA_SUCCESS, payload: data.data});
    })
    .catch((err) => {
      dispatch({type: GET_APPDATA_FAILED});
      console.error(err);
    });
};

