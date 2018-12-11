import { ADD_TODO } from './../reducers/index';

export const addTodo = text => {
    console.log(text);
    return {
        type: ADD_TODO,
        payload: text
    }
}