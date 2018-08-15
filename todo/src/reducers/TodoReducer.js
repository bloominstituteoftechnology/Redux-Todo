import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todos = [
    {
        text: 'Put some Redux in it.',
        completed: false,
    }
];

export const todoApp = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed,
                        })
                    }
                    return todo;
                })
            })
        default:
            return state;
    }
}