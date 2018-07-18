export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addNewTodo = todo => ({
    type: 'ADD_NEW_TODO',
    payload: todo
});

export const toggleCompleted = () => ({
    type: 'TOGGLE_COMPLETED',
});