import {SUBMIT, CLEAR, COMPLETED} from '../actions';

const initialState = [{value: 'task1', completed: false}, {value: 'task2', completed: true}];

const rootReducer = (todos = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return [...todos, {value: action.payload, completed: false}];
        case CLEAR:
            return todos.filter(todo =>
                (todo.value !== action.payload) ? todo : null
            );
        case COMPLETED:
            return todos.map(todo =>
                (todo.value === action.payload) ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return todos;
    }
};

export default rootReducer;
