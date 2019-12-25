import {CHANGE_TITLE, ADD_TODO, TOGGLE_COMPLETED } from '../reducers';


export const changeTitle = text => {

    return{
        type: CHANGE_TITLE,
        payload:text
    };
};

export const addTodo = todoText => {
    return {
        type: ADD_TODO,
        payload:todoText
    }

}
export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload:id
    }

}