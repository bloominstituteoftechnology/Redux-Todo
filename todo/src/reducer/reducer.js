import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actions';


const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, { value: action.todo, completed: false }]
          }

        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if(todo.value === action.todo) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })

        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter( todo => {
                    return todo.value !== action.todo
                })
            })
        default:
            return state;
    }
}