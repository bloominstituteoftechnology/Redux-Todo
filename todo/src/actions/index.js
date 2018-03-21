export const ADD_TODO = 'This will add a todo to the list';
export const DELETE_TODO = 'This, on click, will delete todo from the list';

// 
let nextId = 0;
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        text: todo,
        id: ++nextId,
    };
};

// id here used to identify which to todo to delete
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}