// import { ADD_TODO } from '../actions';

// const setNewState = {
//     toDo: [
//         {
//             todo: 'Active task: ',
//             completed: false
//         },
//         {
//             todo: 'Another task: ',
//             completed: false,
//         }
//     ],
// }

// export const toDoReducer = (state = setNewState, action) => {
//     switch (action.type) {
//         case ADD_TODO: 
//         console.log(state)
//         return Object.assign({}, {toDo: [...state.toDo, action.payload]});
//       default: 
//         return state;;
//     }
// };

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default todos;