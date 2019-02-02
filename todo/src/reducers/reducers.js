import { ADD_TODO, TOGGLE_TODO } from '../actions/Action'

let initialState ={
    title: "My Todo App",
    todos: [
        { todo: "code, code, code", complete: false },
        { todo: "walk the dog", complete: true}
    ]
}

export default function Reducer(state = initialState, action) {
    console.log('Reducer', action)
    switch(action.type) {
        case ADD_TODO:
        console.log('add_todo:', action)
        const newTodo = {
            todo: action.payload,
            complete: false
        }
        return {
            ...state, todos: [...state.todos, newTodo]
        }
            // return Object.assign({}, state, {title: action.title})
   
        case TOGGLE_TODO:
            return {
                ...state, 
                todos: state.todos.map((todo, index) => 
                    action.payload === index ? {...todo, complete: !todo.complete} : todo
                )
            }

        default: 
            return state
    }
}