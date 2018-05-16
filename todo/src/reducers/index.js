import { ADDTODO, TOGGLE } from '../actions';

// export default function todos (state = [], action) { 
// ^^^ this one gives the reducer a name "todos" but we're 
// not sure if it needs to have a name.
export default (state = [], action) => {
    switch (action.type) {
        case ADDTODO:
          return state.concat([{ text: action.text, completed: false }])
        case TOGGLE:
          return state.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
        default:
            return state
    }
}