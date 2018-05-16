import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
    input: '',
    todos: [
    {
        id: 0,
        text: 'Finish this repo',
        complete: false,
    }
    ]
}

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        let todosForAdd = state.todos.slice();
        let newtodo = todosForAdd.concat(action.payload);
        return Object.assign({}, state, { input: '', todos: newtodo });
        case TOGGLE_TODO:
        const id = action.payload;
        const toggle = state.todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
                return todo;
            } 
                return todo
            }
        );
        return Object.assign({}, state, { todos: toggle});
        default:
        return state;
    } 
}
