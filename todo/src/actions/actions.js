import {ADD_TODO, TOGGLE_COMPLETE} from '../reducers/reducers';

export const addTodo = text => {
    console.log(text);
    return {
        type: ADD_TODO,
        payload: text
    };
};

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};