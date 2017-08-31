import { connect } from 'react-redux';

export const ADD = "ADD";
export const UPDATE = "UPDATE"


export const update = (e) => {
    return {
        type: UPDATE,
        text: e.target.value
    }
}
export const add = (text) => {
    return {
        type: ADD,
        text: text,
    }
}

