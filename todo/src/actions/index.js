export const ADD_TO_LIST = 'ADD_TO_LIST';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addtolist = item => {
    return {
        type: 'ADD_TO_LIST',
        payload: item
    };
};

export const toggleComplete = item => {
    return {

    };
}