export const ADD_TODO = "ADD_TODO";

export const addTodo = value => {
    return {
        type: ADD_TODO,
        payload: value
    };
}