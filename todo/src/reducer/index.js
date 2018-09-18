// import { TOGGLE_COMPLETED } from '../actions';

const initialState = {
    todos: [
        {
            text: 'Finish MVP on Redux-Todo',
            completed: false
        }
    ]
};


const todos = (state = initialState, action) => {
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
        const newTodos = state.map(todo => (todo.id === action.id)
         ? {...todo, completed: !todo.completed} 
         : todo )
            return {
                state, todos: newTodos
            }
        default:
            return state
    }
}

export default todos;