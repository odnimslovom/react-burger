import {SET_MODAL, UNSET_MODAL} from "../actions/modal";

const initialState = {
  isModalOpen: false,
  contentModal: null,
  typeModal: ''
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        isModalOpen: true,
        contentModal: action.payload,
        typeModal: action.spec
      }
    case UNSET_MODAL:
      return {
        ...state,
        isModalOpen: false,
        contentModal: null,
        typeModal: ''
      }
    default:
      return state;
  }
}
