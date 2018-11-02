export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
let id = 0;

//Action Creators
export const addTodo = (todoText) => {
     return {type: ADD_TODO, payload: {value: todoText, id: id++, completed: false} }
}

export const removeTodo = (id) => {
    return {type: REMOVE_TODO, payload: id}
}

