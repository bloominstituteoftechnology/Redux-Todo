// import { TOGGLE_COMPLETED } from '../actions';

export const initialState = {
    todos: [
        {
            value: 'Finish MVP on Redux-Todo',
            completed: false
        }
    ]
};


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_COMPLETED':
        const newTodos = state.todos.map(todo => todo.id === action.id)
         ? {...todo, completed: !todo.completed} 
         : todo )
            return {
                state, todos: newTodos
            }
        default:
            return state
    }
}


