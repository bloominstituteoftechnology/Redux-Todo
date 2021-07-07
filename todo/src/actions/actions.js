import {ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO} from '../reducers/reducers';

export const addTodo = value => {
    console.log(value);
    return {
        type: ADD_TODO,
        payload: value
    };
};

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};

export const actionDeleteTodo = index => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}