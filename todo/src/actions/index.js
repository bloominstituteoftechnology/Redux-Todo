import { ADD_ITEM, TOGGLE_COMPLETE } from '../reducers';

// action creator
// it creates an action - a plain JS object with
// type and payload property
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const toggleComplete = itemId => {
  return {
    type: TOGGLE_COMPLETE,
    payload: itemId
  };
};
