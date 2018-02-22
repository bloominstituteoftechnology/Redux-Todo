export const NEW_TODO_ITEM = 'NEW_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';
// export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

export const addNewTodoItem = (todo) => {
    return {
        type: NEW_TODO_ITEM,
        payload: todo,
    }
}

export const toggleTodoItem = (index) => {
    return {
        type: TOGGLE_TODO_ITEM,
        payload: index,
    }
}

// export const deleteTodoItem = (index) => {
//     return {
//         type: DELETE_TODO_ITEM,
//         id: index,
//     }
// }