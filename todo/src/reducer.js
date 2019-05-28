import { Add_TODO } from "./Actions"

let defaultState = {
    todos: [
        {
            name: "",
            completed: false
        }
    ]
}


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case Add_TODO:
            let newTodo = [...state.todos, action.payload];
            return Object.assign({}, state, { todos: newTodo })
        default:
            return state;    
        }
}




