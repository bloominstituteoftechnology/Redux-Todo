const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

//Action Creators
const addTodo = (todo) => {
    return {type: ADD_TODO, payload: todo}
}

const removeTodo = (id) => {
    return {type: REMOVE_TODO, payload: id}
}