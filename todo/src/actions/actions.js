export const ADD_TODO = 'ADD_TODO';

export function addTodo(str) {
    console.log(str)
    return {
        type: ADD_TODO,
        todo: str
    }
}