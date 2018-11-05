import * as todoActionTypes from '../actionTypes';

const initialState = [
     
                    {
                        value: 'venkateshwarlu you are awesome.',
                        id:0,
                        completed: false
                    }
                ]
export default (state=initialState, action) => {
      return state;
}

export let todoLength = initialState.length;

// export default function Reducer( state=initialState, action) {
//     switch(action.type) {
//         case todoActionTypes.ADD_TODO:
//         return [
//             ...state,
//             {
//                 id: action.id,
//                 text: action.text,
//                 completed: false
//               }
//         ]

//         case todoActionTypes.TOGGLE_TODO:
//         return state.map( todo => {
//              if(todo.id === action.id) {
//                  return {
//                      ...todo, 
//                      completed:!todo.completed
//                  }
//              }
//         })

//         case todoActionTypes.DELETE_TODO:
//         return [
//             ...state.slice(0, action.id),
//             ...state.slice(action.id + 1)
//         ];

//         case todoActionTypes.UPDATE_TODO:
//         return state.map( (todo, index) => {
//             if(index === action.id) {
//                 return {
//                     ...todo,
//                     value: action.value
//                 }
//             }
//             return todo;
//         });

//         default:
//          return state;
//     }
// }