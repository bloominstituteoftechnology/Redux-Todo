export const ADD_TODO = "ADD_TODO";

// create action creator
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}