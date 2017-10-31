export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_SELECT ='TOGGLE_SELECT';

export const addTodo = (text, id) => {
   const payload = {
       text,
       completed: false,
       id
   }
   return {
       type: ADD_TODO,
       payload        
   };
};

export const toggleSelect = (id) => {
    return {
        type: TOGGLE_SELECT,
        id
    };
};