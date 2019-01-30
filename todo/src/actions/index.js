import { ADD_TO_LIST, 
        TOGGLE_COMPLETE,
        DELETE_ITEM,
        CLEAR_COMPLETE } 
    from '../reducers';

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

export const deleteItem = index => {
    return {
        type: DELETE_ITEM,
        payload: index
    }
}

export const clearComplete = () => {
    return {
        type: CLEAR_COMPLETE
    }
}