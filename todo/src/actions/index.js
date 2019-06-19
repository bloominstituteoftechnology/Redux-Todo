export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_DONE = "TOGGLE-DONE";

export const addNewItem = newItem => {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
};

export const toggleDone = index => {
  return {
    type: TOGGLE_DONE,
    payload: index
  };
};
