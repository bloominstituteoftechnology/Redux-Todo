export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

export const handleInputChange = value => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: value
  };
};

export const handleSubmit = value => {
  return {
    type: HANDLE_SUBMIT,
    payload: value
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
