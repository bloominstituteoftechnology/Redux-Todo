import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
    todos: [{ value: "todo", completed: false }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            } );
            // return [...todos, action.payload];
            // return todos.concat(action.payload);
        case TOGGLE_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return {...todo, completed: !todo.completed};
                    }
                    return todo;
                } )
            } );
            // todos[action.payload].complete = !todos[action.payload].complete;
            // return todos;
            // return todos.map(todo => {
            //     if (todo.id === action.payload) {
            //       return Object.assign({}, todo, { complete: !todo.complete });
            //     }
            //     return todo;
            //   });
        default:
            return state;
    }
};







// import { combineReducers } from 'redux';
// import todosReducer from './todosReducer';

// const rootReducer = combineReducers({
//   todos: todosReducer
// });

// export default rootReducer;