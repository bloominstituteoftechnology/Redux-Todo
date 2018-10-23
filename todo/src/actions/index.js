export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_INCOMPLETE = 'TOGGLE_INCOMPLETE';

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO, payload: newTodo
    }
}

export const toggleTodo = (id) => {
    
    return {
        type: TOGGLE_COMPLETE, payload: id
    }
}