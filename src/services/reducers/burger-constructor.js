import {ADD_BUN, ADD_FILLING, DELETE_FILLING, MOVE_FILLING, RESET_CONSTRUCTOR,} from "../actions/burger-constructor";

const initialState = {
  bunItem: [],
  fillingItems: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bunItem: action.payload
      };
    case ADD_FILLING:
      return {
        ...state,
        fillingItems: [...state.fillingItems, action.payload]
      };
    case MOVE_FILLING: {
      const newState = [...state.fillingItems];
      const prevItem = newState.splice(action.payload.hoverIDX, 1, action.payload.item);
      newState.splice(action.payload.dragIDX, 1, prevItem[0])
      return {
        ...state,
        fillingItems: newState
      };
    }
    case DELETE_FILLING:
      return {
        ...state,
        fillingItems: [...state.fillingItems].filter(item => item.itemID !== action.payload)
      };
    case RESET_CONSTRUCTOR:
      return {
        ...state,
        bunItem: [],
        fillingItems: []
      }
    default:
      return state;
  }
}
