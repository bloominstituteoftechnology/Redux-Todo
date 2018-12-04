import  {ADD_TODOS,     COMPLETED } from '../reducers/';

export const addTodos = value => {
    return {
        type: ADD_TODOS,
        payload: value
    }
}

export const toggleComplete = index => {
    return {
        type: COMPLETED,
        payload: index
    }
}