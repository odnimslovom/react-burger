export const SET_MODAL = 'SET_MODAL';
export const UNSET_MODAL = 'UNSET_MODAL';

export const setModal = (content, type) => (
  {
    type: 'SET_MODAL',
    payload: content,
    spec: type
  }
);

export const unsetModal = () => (
  {type: 'UNSET_MODAL'}
);
