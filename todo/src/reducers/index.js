import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return { ...state, todos: [...initialState.todos, {value: action.payload, complete: false}]}
        case TOGGLETODO:
            return { ...state, todos: [...initialState.todos, {complete: action.payload}]}
        default:
            return state;
    }
  };
  