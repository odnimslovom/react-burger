import {GET_APPDATA_FAILED, GET_APPDATA_REQUEST, GET_APPDATA_SUCCESS} from "../actions/burger-ingredients";

const initialState = {
  ingredients: [],
  isLoading: false,
  hasError: false
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_APPDATA_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false,
        hasError: false,
      };
    case GET_APPDATA_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state;
  }
};

