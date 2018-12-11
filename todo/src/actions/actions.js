export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'


export const addTodo = todo =>
{
    return {
        type: ADD_TODO,
        payload: todo

    }
}


export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id

    }
}

export const deleteTodo = ()=> {

    return {
        type: DELETE_TODO

    }
}
