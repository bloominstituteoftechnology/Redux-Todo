export const ADDTODO = 'ADDTODO';
export const DELETETODO = 'DELETETODO';

export const addTodo = (todo) => {
    return {
        type: 'ADDTODO',
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETETODO,
        payload: todo
    };
};