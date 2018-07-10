import {SUBMIT, CLEAR, COMPLETED} from '../actions';

const initialState = [{value: 'task1', completed: false}, {value: 'task2', completed: false}];

const rootReducer = (todos = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return [...todos, {value: action.payload, completed: false}];
        case CLEAR:
            return todos;
        case COMPLETED:
            return todos;
        default:
            return todos;
    }
};

export default rootReducer;
