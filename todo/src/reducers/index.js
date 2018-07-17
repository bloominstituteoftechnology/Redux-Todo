import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions';

const initialState = [{ text: 'Clean Garage', completed: false, id: 0 }];

export const todosReducer = (state = initialState, action) => {
    console.log('Reducer Info', state, action.type, action.payload);
    switch (action.type) {
        case ADD_TODO:
        return Object.assign({}, state, {
            todos: [...state.todos, action.payload]
        });
        case UPDATE_TODO:
        return state;
        default:
        return state;
    }
};


// export default todosReducer;