import React from 'react';
import {UPDATE_NAME} from '../actions'

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

const initialState = {todo: []}

export default (state = initialState, action) => {
    switch (action.type) { 
        default: return state;
    }
}