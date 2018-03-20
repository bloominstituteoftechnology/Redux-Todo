export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

export const add = () => {
   return {
       type: ADD,
       data: {}
   }
};

export const toggle = () => {
    return {
        type: TOGGLE,
        completed: false
    }
};