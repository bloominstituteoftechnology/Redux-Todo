export const addNewTodo = newTodo => ({
    type: 'ADD',
    payload: newTodo
});

export const completeTodo = id => ({
    type: 'COMPLETE',
    payload: id
});

export const deleteTodo = id => ({
    type: 'DELETE',
    payload: id
});