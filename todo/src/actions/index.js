export const ADD_TO_DO = 'ADD_TO_DO';
export const TOGGLE_TO_DO = 'TOGGLE_TO_DO';

export const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    payload: todo
  };
};

export const toggleTodo = (index) => {
    return {
      type: TOGGLE_TO_DO,
      payload: index
    };
  };

