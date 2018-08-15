//ACTION TYPES
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = 'GET_TODOS';

//ACTION CREATORS
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const removeTodo = () => {
    return {
        type: REMOVE_TODO
    };
};

export const getTodos = todos => {
    return {
        type: GET_TODOS,
        payload: todos
    };
};