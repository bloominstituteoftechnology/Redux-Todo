/* action types */

export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";
export const DELETE_TODO = "DELETE_TODO";

/* action creators */

 export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const getTodos = () => {
    console.log("here");
    return {
        type: GET_TODOS,
        payload: []
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}
