import {ADD_BUN, ADD_FILLING, DELETE_FILLING,} from "../actions/burger-constructor";

const initialState = {
  bunItem: [],
  fillingItems: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: action.payload
      };
    case ADD_FILLING:
      return {
        ...state,
        ingredients: [...state.fillingItems, action.payload]
      };
    case DELETE_FILLING:
      return {
        ...state,
        ingredients: [...state.fillingItems].filter(item => item.id === action.payload)
      }
    default:
      return state;
  }
}
