export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

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