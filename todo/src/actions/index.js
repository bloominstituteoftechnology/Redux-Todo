// Import ActionTypes from ./reducers
import { ADD_TO_LIST, TOGGLE_COMPLETE } from '../reducers';

// Export Action creators
// These return objects passed into the reducer

export const addToList = text => {
    return {
        type: ADD_TO_LIST,
        payload: text
    }
}