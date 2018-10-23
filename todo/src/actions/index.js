export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

 export const addTodo = todo => {
     console.log("inside action", todo)
    return { type: ADD_TODO, payload: todo};
}

export const toggleTodo = id => {
    console.log('id inside action', id)
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const removeTodo = () => {
    return {
        type: REMOVE_TODO
    }
}