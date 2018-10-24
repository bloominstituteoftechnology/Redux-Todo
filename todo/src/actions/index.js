export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODOS = 'TOGGLE_TODOS';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleTodos = index => {
    return {
        type: TOGGLE_TODOS,
        payload: index
    };
};
