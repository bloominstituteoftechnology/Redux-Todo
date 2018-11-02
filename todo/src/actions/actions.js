export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'


export const addTodo = payload =>
{
    return {
        type: ADD_TODO,
        payload: payload

    }
}


export const toggleTodo = () => {
    return {
        type: TOGGLE_TODO

    }
}

