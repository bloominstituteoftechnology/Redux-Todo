export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = 'GET_TODOS';

export const addToDo = item => {
    console.log('inside action', item);
    return {
      type: ADD_TODO,
      payload: item
    };
  };
  
  export const toggleToDo = index => {
    return {
      type: TOGGLE_TODO,
      payload: index
    };
  };

  export const removeToDo = () => {
    return {type: REMOVE_TODO}
  }

  export const getTodos = item => {
    return {
      type: GET_TODOS,
      payload: item
    };
  };