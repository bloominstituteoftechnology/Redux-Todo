export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_DONE = "TOGGLE-DONE";

export const addNewItem = newItem => {
  //   console.log(newItem);
  return {
    type: ADD_ITEM,
    payload: newItem
  };
};

export const toggleDone = index => {
  //   console.log(index);
  return {
    type: TOGGLE_DONE,
    payload: index
  };
};
