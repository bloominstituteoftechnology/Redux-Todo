export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_SELECT ='TOGGLE_SELECT';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};