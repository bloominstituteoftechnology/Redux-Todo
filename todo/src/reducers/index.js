import { ADD_TODO } from '../actions/TodoActions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        return [
            ...todos,
            {
                value: action.value,
                completed: false 
            }
        ];

        default: 
        return todos;
    }
};