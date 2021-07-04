export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_INCOMPLETE = 'TOGGLE_INCOMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

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

export const deleteTodo = (id) => {

    return {
        type: DELETE_TODO, payload: id
    }
}