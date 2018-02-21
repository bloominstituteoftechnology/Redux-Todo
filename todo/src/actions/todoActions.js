export const ADDTODO = 'ADDTODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    };
};

export const toggleComplete = (id) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    };
};