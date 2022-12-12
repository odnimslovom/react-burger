export const ADD_BUN = 'ADD_BUN';
export const ADD_FILLING = 'ADD_FILLING';
export const DELETE_FILLING = 'DELETE_FILLING';
export const MOVE_FILLING = 'MOVE_FILLING';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

export const addBun = (item, itemID) => ({
  type: ADD_BUN,
  payload: {...item, itemID}
});

export const addFilling = (item, itemID) => ({
  type: ADD_FILLING,
  payload: {...item, itemID}
});

export const deleteFilling = (itemID) => ({
  type: DELETE_FILLING,
  payload: itemID
});

export const moveFilling = (dragIDX, hoverIDX, item) => ({
  type: MOVE_FILLING,
  payload: {dragIDX, hoverIDX, item}
});

export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR
});
