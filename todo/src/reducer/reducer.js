import { ADD_TODO } from '../actions/actions';

const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    console.log(action.todo)
    switch (action.type) {
        case 'ADD_TODO':
        return {
            ...state,
            todos: [...state.todos, { value: action.todo, completed: false }]
          }
        default:
            return state;
    }
}