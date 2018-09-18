
import {comblineReducers} from 'redux';
import todosReducer from './todosReducer';
import {ADD_TODO} from '../actions'

const rootReducer = comblineReducers ({
todos: todosReducer,
});
export default rootReducer;

// export function todos(state = [] ,action) {
//     switch (action.type){
//         case ADD_TODO:
//         return [
//             ...state,
//             { 
//             id: action.id,
//             text: action.text,
//             completed: false
//         }
//     ];
//         default:
//         return state;
//     }
// }

export default todos