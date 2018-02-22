// import {combineReducers} from 'redux';
// import todosReducer from './todosReducer';

// const reducers = combineReducers({
//     todos: todosReducer
// });

// export default reducers;

import {NEW_TODO_ITEM, TOGGLE_TODO_ITEM, DELETE_TODO_ITEM} from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case NEW_TODO_ITEM:
            console.log('added');
            return todos.concat(action.payload);
        case TOGGLE_TODO_ITEM:
            console.log('completed');  
            // const newTodos = todos.slice(0);
            const newTodos = [...todos];
            newTodos[action.payload].completed = !newTodos[action.payload].completed;
            return newTodos;
            // return todos.map(
            //     (todo, index) =>
            //       action.index === index
            //         ? { value: todo.value, completed: !todo.completed }
            //         : todo
            //   )
            case DELETE_TODO_ITEM:
                return todos.filter(todo => todo.action.payload !== action.payload);
        default:
            return todos;
    }
}
