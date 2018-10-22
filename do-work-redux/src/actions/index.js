export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};
