// import { VisibilityFilters } from '../actions';
// import { Object } from 'core-js';

// const todos = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case 'TOGGLE_TODO':
//             return state.map(todo => 
//                 (todo.id === action.id)
//                 ? {...todo, completed: !todo.completed}
//                 :todo
//             )
//         default:
//             return state
//     }
// }

// const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
//     switch (action.type) {
//         case 'SET_VISIBILITY_FILTER':
//             return action.filter
//         default:
//             return state
//     }
// }

import {ADD_TODO} from '../actions';

export default (todos=[], action) => {
    switch(action.type) {
        case ADD_TODO:
        return [...todos, action.payload]
    }
}
