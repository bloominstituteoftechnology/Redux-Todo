import { ADD_TODO } from './../reducers/index';

export const addTodo = todo => {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export default addTodo;