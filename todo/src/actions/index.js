export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = 'GET-TODOS';

const addTodo = todo => ({
   type: ADD_TODO,
   payload: todo
});

const removeTodo =  () => ({
    type: REMOVE_TODO
});



const getTodos = todos => ({
   type: GET_TODOS,
    payload: todos
});
export {addTodo, removeTodo, getTodos};