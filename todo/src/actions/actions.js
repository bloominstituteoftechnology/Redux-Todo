export const ADD_TODO = 'ADD_TODO';

let todoID = 0

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: todo,
        id: todoID++
    }
}