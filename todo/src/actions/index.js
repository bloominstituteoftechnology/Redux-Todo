export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETE= 'TOGGLE_COMPLETE';

export const add = (value)=> ({
    type: ADD_ITEM,
    payload: value
})

export const toggle = (index)=> ({
    type: TOGGLE_COMPLETE,
    // index
}) 