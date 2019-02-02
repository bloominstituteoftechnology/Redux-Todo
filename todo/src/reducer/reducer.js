import { ADD_TODO } from '../actions/actions'


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
        // console.log("HI FROM CASE", action "IS MY ACTION AND NOW CHANGING STATE WITH NEW DATA")
        const newTodo = {
            todo: action.payload,
            complete: false
        }
        return {
            ...state, todos:[...state.todos, newTodo]
        }
    }
    return state;
}