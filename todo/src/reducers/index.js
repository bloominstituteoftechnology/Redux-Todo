import { ADDTODO, TOGGLETODO } from "../actions";

const initState = [
    {
        id: 0,
        title: 'active task',
        completed: false
    },
    {
        id: 1,
        title: 'completed task',
        completed: true
    }
]

const todos = (state = initState, action) => {
    switch(action.type){
        case ADDTODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ]
        case TOGGLETODO:
            return state.map(todo => todo.id === action.id 
                ? {...todo, completed : !todo.completed }
                : todo)
        default:
            return state
    }
}

export default todos