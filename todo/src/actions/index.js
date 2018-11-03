// // Packets of information that contain action type
// // Gets triggered from human interaction
// // Functions that return plain JS objects
// // Dispatch under the hood
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETED = 'COMPLETED';
 export const handleSubmit = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};
 export const handleClear = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    };
};
 export const handleCompleted = (id) => {
    return {
        type: COMPLETED,
        payload: id
    };
};