export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const ADD_TODO = 'ADD_TODO';

let id = 0;

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    id: id++,
    payload: todo
  };
};

export const toggleComplete = (index) => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: index
  };
};

export default addTodo;
// export default toggleComplete;
