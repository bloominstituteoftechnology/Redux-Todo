import { ADDTODO } from '../actions';

const initialState = {
    todos: [
        {id: 0,
        text: '',
        completed: false}
    ],
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO: 
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        default: 
            return state;
    }
}   