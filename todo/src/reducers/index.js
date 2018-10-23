import { ADD_TODO, TODO_COMPLETE, DELETE_TODO } from '../actions/index';

const initialState = [
    {
        task: 'wash floor',
        completed: false,
        id: Date.now()
    }
];



const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_TODO:
            return state.filter(todo => {
                return !todo.completed;
            })
        case TODO_COMPLETE:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                } else {
                    return todo;
                }
            });

            return
        case ADD_TODO:
            return state.concat(action.payload);

        default:
            return state;
    }
};

export default todoReducer;