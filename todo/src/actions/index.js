export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextId = 0;

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo,
        completed: false,
        id: nextId++
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id 
    };
};