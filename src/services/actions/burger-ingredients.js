import { getAppData} from "../burgerApiServicve";

export const GET_APPDATA_REQUEST = 'GET_APPDATA_REQUEST';
export const GET_APPDATA_SUCCESS = 'GET_APPDATA_SUCCESS';
export const GET_APPDATA_FAILED = 'GET_APPDATA_FAILED';

export const getIngredients = () => (dispatch) => {
  dispatch({type: GET_APPDATA_REQUEST});
  getAppData()
    .then(res => {
      dispatch(
        {
          type: GET_APPDATA_SUCCESS,
          payload: res.data,
        });
    })
    .catch(() => {
      dispatch({type: GET_APPDATA_FAILED});
    })
}
