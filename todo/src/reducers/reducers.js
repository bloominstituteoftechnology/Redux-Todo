import React from 'react';

const initialState = {todos: ["Oakland", "SF"]}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": 
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
            {
                task: action.text,
                completed: false,
            }]
        })
        default: return state
    }
}

export default reducer