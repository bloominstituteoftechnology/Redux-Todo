//import actions
import { ADD_TODO, COMPLETE_TODO } from '../actions';

//set initial state value
const initialState = [
    {task: 'Finish Redux Todo List',
     completed: false,
     id: Date.now(),}
]

export const todoReducer = ( state = initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            let tempState = state.concat(action.payload)
            return tempState;
        case COMPLETE_TODO:
            let completedState = state.map(item => {
                if(item.id===action.payload) {
                    return Object.assign({}, item, {completed: !item.completed})
                } else {
                    return item} //Object.assign so we don't mutate the orginal object
            })
            return completedState;
        default:
            return state;
    }
}

// import { ADD_TODO, COMPLETE_TODO } from '../actions';

// const initialState = [
//   { task: 'Learn Redux', completed: false, id: Date.now() }
// ];

// export const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat(action.payload);
//     case COMPLETE_TODO:
//       return state.map(todo => {
//         if (todo.id === action.payload) {
//           return Object.assign({}, todo, { completed: !todo.completed });
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };
