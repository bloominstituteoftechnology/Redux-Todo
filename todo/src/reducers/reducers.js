import { ADD_TODO } from '../actions/Action'

let defaultState ={
    title: "This is the initial state in Reducer.js",
    todos: [{
        todo: "does it work?"
    }]
}

export default function Reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newTodos = [...state.todos, action.payload]
            return Object.assign({}, state, {todos: newTodos})
            // return {...state, title: action.title}
            // return Object.assign({}, state, {title: action.title})
        default: 
            return state
    }
}