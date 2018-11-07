import React from 'react';

const initialState = {todos: [{
    task: "Oakland",
    id: 1,
    completed: false,
    }, {
    task: "SF",
    id: 2,
    completed: false,}]}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": 
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
            {
                task: action.text,
                id: Date.now(),
                completed: false,
            }]
        })
        default: return state
    }
}

// event handlers go here?

export default reducer