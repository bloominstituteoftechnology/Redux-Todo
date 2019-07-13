// action type
export const ADD_TODO = 'ADD_TODO'

// action creator
export function addTodoItem(todo) {
    // action
    return {
        type: ADD_TODO,
        payload: {
            todo,
        }
    }
}