import { ADD_TODO, REMOVE_TODOS, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: []
  }

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODOS:
            return {...state, todos: state.todos.filter(todo => !todo.completed)};
        case TOGGLE_TODO:
            let toggleTodos = [...state.todos]
            toggleTodos[action.payload - 1].completed=!toggleTodos[action.payload - 1].completed
            return ({...state, todos:toggleTodos})
        default:
            return state;
    }
}