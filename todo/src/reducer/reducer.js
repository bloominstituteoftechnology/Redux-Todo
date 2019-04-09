import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actions'


let initialState = {
    title:"My To Dos",
    todos: [
        {
            todo: "Walk around",
            completed: false
        },
        {
            todo: "sit down",
            completed: false
        }
    ]
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
        // console.log("HI FROM CASE", action)
        // console.log("CHANGING STATE NOW")
        const newTodo = {
            todo: action.payload,
            complete: false
        }
        return {
            ...state, todos:[...state.todos, newTodo]
        }

        case TOGGLE_TODO:
        // console.log("HI FROM TOGGLE CASE!")
        // console.log(action.payload)
        return {
            ...state,
            todos: state.todos.map((todo, index) => 
                action.payload === index ? {
                    ...todo,complete: !todo.complete
                } : todo)
        }
    
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => action.payload !== index)
            }

        // console.log("HI FROM DELETE FROM REDUCER")
        // console.log(action)

        default: 
            return state;
    }
}