export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextId = 0;

export const addToDo = text => {
return {
    type: 'ADD_TODO',
    payload: { id: nextId++, todo: text }
    }
}

export const todoToggle = id => {
return {
    type: 'TOGGLE_TODO',
    payload: { id: id }
    }
};