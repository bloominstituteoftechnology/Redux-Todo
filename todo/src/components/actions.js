export const ADDTODO = 'ADDTODO';

export const addToDo = (todo = '') => {
    return {
        type: ADDTODO,
        payload: todo,
    }
}