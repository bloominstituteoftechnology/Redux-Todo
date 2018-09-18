export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = text => {
    return {
    type: ADD_TODO,
    payload: text
    }
};



export const toggleTodo = (id) => {
    return {
    type: TOGGLE_TODO,
    payload: id
    }
};

export const getTodos = todos => {
    return {
        type: GET_TODOS,
        payload: todos
    };
};

