import { ADD_TODO } from '../actions';

const initialState = {
        todo: [{value: 'breakfast', completed: false}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: state.todo.concat({value: action.text, completed: false})
        };
        default:
        return state;
    }
};