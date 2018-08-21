export const NEW_TODO = 'NEW_TODO';
export const GET_TODO = 'GET_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    }
}

export const getTodo = todos => {
    return {
        type: GET_TODO,
        payload: todos
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}