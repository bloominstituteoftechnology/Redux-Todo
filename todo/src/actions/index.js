export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';
export const SORT_UP = 'SORT_UP';
export const SORT_COMP = 'SORT_COMP';

export const addToDo = (text, id) => {
  return {
    type: ADD_ITEM,
    payload: {
      text: text,
      id: id
    }
  }
}

export const toggleActive = updateArr => {
  return {
    type: TOGGLE_ACTIVE,
    payload: updateArr
  }
}

export const deleteItem = updateArr => {
  return {
    type: DELETE_ITEM,
    payload: updateArr
  }
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
    payload: []
  }
}

export const sortedArr = sorted => {
  return {
    type: SORT_UP,
    payload: sorted
  }
}

export const sortComp = arr => {
  return {
    type: SORT_COMP,
    payload: arr
  }
}
