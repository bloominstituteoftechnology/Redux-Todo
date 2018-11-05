import React from 'react';
import {UPDATE_NAME} from '../actions'
import {ADD} from '../actions'

// const initialState = {name: 'Tommy' };
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_NAME:
//         return {
//             ...state, 
//             name: action.payload}
//         default: return state
//     }
// }

const initialState = {todos: []}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD: 
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
            {
                id: state.todos.length +1,
                task: action.text,
                completed: false,
            }]
        })
    }




}
