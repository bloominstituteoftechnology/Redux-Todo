import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../reducers";

export const addTodo = todo => {
    return{
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleTodo = index => {
    return{
        type: TOGGLE_TODO,
        payload: index
    };
};

export const deleteTodo = () => {
    return{
        type: DELETE_TODO
    };
};

// payload object