import { v4 } from 'node-uuid';
// node-uuid is a small package that generates unique ID's. This is used so that ID's will remain unique even between refreshes. 
// The old method we had used a local variable and an increment to assign ID's. Unfortunately, that variable would reset to 0 between refreshes, but the data persists, leading to new ToDo's having the same ID as old ones. node-uuid addresses this problem.

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";


export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        payload: {
            id: v4(),
            value: value,
            completed: false
        }
    };
};

export const deleteTodo = (i) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: i,
        }
    };
};

export const completeTodo = (i) => {
    return {
        type: COMPLETE_TODO,
        payload: {
            id: i,
        }
    }
}