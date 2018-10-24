import { ADD_TASK, CLEAR_COMPLETED_TASKS, TOGGLE_COMPLETION } from '../Actions/actionsIndex';

const initialState = {
    todos: [
        {
            task: "Walk the dog",
            completed: false
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todos: [...state.todos, action.payload] }

        case TOGGLE_COMPLETION:
            console.log(state)
            return { ...state, todos: state.todos.map((todo, index) => {
                if (index === action.payload) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            }) }

        // case CLEAR_COMPLETED_TASKS:
        //     let incomplete = state.todos.filter(todo => todo.id !== action.payload)
        //     return {...state, todos: incomplete}

        default:
            return state
    }
}