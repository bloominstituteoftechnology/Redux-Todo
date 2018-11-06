import * as todoActionTypes from '../actionTypes';
import {todoLength} from '../reducers/reducer';

let increaseTodoId = todoLength || 0;

export const addTodo = value => {
    return {
        type:todoActionTypes.ADD_TODO,
        payload: {value: value, completed:false}
    };
};

export const toggleTodo = id => {
     return {
          type:todoActionTypes.TOGGLE_TODO,
          id:id
     };
};

export const deleteTodo = id => {
    return {
        type:todoActionTypes.DELETE_TODO,
        id:id
    };
};

export const updateTodo = (id, value) => {
    return {
        type:todoActionTypes.UPDATE_TODO,
        id:id
    };
};