/* action types */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

/* action creators */

 export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTodo = (todo) => {
    return {
        type: TOGGLE_TODO,
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}
