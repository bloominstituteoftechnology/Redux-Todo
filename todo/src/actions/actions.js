export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = (todo)=> {
    return {
        type: NEW_TODO,
        payload: todo
    };
};

export const toggleCompleted = (item)=> {
    return {
        type: TOGGLE_COMPLETED,
        payload: item
    };
};