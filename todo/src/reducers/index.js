import { ADD_TODO } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return
                [...todos,
                {
                    completed: false,
                    text: action.text
                }];
        default:
            return todos;
    }
};