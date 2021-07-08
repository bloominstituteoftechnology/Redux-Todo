export const HANDLE_INPUT = 'HANDLE_INPUT';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_ITEM = 'DELETE_ITEM';

export const handleInput = value => {
  return {
    type: HANDLE_INPUT,
    payload: value
  };
};

export const handleSubmit = value => {
  return {
    type: HANDLE_SUBMIT,
    payload: value
  };
};

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
