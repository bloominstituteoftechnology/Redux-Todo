export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = () => {
    return {
      type: 'ADD_TODO'
    }
  };
  
  export const delTodo = () => {
    return {
      type: 'DEL_TODO'
    }
  };