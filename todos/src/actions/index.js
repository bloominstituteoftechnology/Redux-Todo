import { todos } from '../reducers';

export const SUBMIT_TODO = 'SUBMIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const submitTodo = () => {
  return { 
    type: SUBMIT_TODO,
    payload: todos
  }
};

export const toggleTodo = () => {
  return { 
    type: TOGGLE_TODO,
    payload: todos
  }
};