export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const CHECK_COMPLETE = 'CHECK_COMPLETE';

export const add_list_item = (formData) => {
  return {
    type: ADD_LIST_ITEM,
    payload: formData
  };
}

export const remove_list_item = (itemName) => {
  return {
    type: REMOVE_LIST_ITEM,
    itemToRemove: itemName
  };
}

export const check_complete = (itemName) => {
  return {
    type: CHECK_COMPLETE,
    itemToCheck: itemName
  };
}