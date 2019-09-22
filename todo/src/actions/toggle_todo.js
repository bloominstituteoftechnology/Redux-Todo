export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggle_todo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};