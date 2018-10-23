import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
    todos: [{inputText: 'feed kitten', completed: false}, {inputText: 'finish todo app', completed: false}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
        return { todos: [ ...state.todos, {id: action.id, inputText: action.inputText, completed: false}]}
        case TOGGLETODO:
            return state.map(todo => (
                todo.id === action.id ? {...todo, complete: !todo.completed} : todo
            ))
        default:
            return state;
    }
  };
  