import { ADD_TODO, COMPLETE_TOGGLE } from '../actions'; 


const initialState = [
    { task: 'London is Home', completed: false, id: Date.now() }
];

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.payload);
        case COMPLETE_TOGGLE:
            return todos.map(todo => {
                if (todos.id === action.payload) {
                    return Object.assign({}, todos, { completed: !todos.completed })
                } else {
                    return todos;
                }
            })
        default:
            return todos;
    }
};
