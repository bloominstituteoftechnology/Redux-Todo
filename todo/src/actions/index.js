export const ADDTODO = 'ADDTODO';

export const addTodo = (todo) => {
    return {
        type: 'ADDTODO',
        payload: todo
    }
}