export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

let id = 0;

//Action Creators
export const addTodo = (todoText) => {
     return {type: ADD_TODO, payload: {value: todoText, id: id++, completed: false} }
}

export const toggleComplete = (id) => {
    return {type: TOGGLE_COMPLETED, payload: id}
}

export const removeTodo = () =>{
    return {type: REMOVE_TODO}
}
