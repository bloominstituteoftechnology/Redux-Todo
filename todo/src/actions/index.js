export const ADD_TODO ='ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo =(text) => {
    return {
        type: ADD_TODO,
        payload: text,
    }
};

export const removeTodo =(index) => {
    return {
        type: REMOVE_TODO,
        payload:index,
        complete:true
    }
};