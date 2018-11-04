import { MARK_DONE, ADD_TODO } from '../actions/index';

const initialState = {
    todos: [{
        value: 'Walk the dog',
        completed: false,
        id: 1
    }]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
          return Object.assign({}, state, {
            todos: [
                ...state.todos, 
                {
                    value: action.payload.todo,
                    completed: action.payload.completed,
                    id: Math.floor(Math.random() * 10000)
                }
            ]
          });  
        case MARK_DONE:
            const todos = state.todos.map(todo => { 
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                        return todo;
                    } else {
                        return todo;
                    }
                }
            )
            return Object.assign({}, state, { todos: todos });
        default:
            return state;
    }
};