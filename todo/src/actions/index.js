export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TODO_INPUT = 'TODO_INPUT';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const todoInput = input => {
    return {
        type: TODO_INPUT,
        payload: input
    }
}

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETE
    }
}

