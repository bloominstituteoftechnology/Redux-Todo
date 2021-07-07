export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextID = 1;
// create action creator
export const addTodo = value => {
    return {
        type: ADD_TODO,
        value,
        id: nextID++    
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};