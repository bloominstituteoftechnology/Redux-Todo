import { ADD_TO_LIST, TOGGLE_COMPLETE } from '../reducers';

export const addToList = text => {
    return {
        type: ADD_TO_LIST,
        payload: text
    }
}

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}