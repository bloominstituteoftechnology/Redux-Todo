import React from 'react';

const initialState = {todos: []}

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
    }
}

export default reducer