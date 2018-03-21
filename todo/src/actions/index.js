

export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

export const add = (todo) => {
  return {
       type: ADD,
       text: todo,
   }
};

export const toggle = () => {
    return {
        type: TOGGLE,
        completed: true
    }
}; 
