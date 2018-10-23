import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
    todos: [{inputText: 'feed kitten', completed: false}, {inputText: 'finish todo app', completed: false}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
        return { todos: [ ...state.todos, {id: action.id, inputText: action.inputText, completed: false}]}
        case TOGGLETODO:
            return { todos: state.todos.map((todo, ind) => (
                ind === action.id ? {...todo, completed: !todo.completed} : todo
            ))} 
        default:
            return state;
    }
  };
  