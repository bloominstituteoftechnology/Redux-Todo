import { ADD_TODO, TOGGLE_SELECT } from '../actions';

let id = 0;

const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0    
    }
];

export default (todos = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {
                text: action.payload.text,
                completed: action.payload.completed,
                id: action.payload.id
            }];
        case TOGGLE_SELECT:
            const newTodos = todos;
            if (newTodos[action.id].completed) {
                newTodos[action.id].completed = false;
            } else {
                newTodos[action.id].completed = true;
            }
            return newTodos;
        default:
            return todos;
    }
};

