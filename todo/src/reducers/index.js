import { ADD_TODO } from '../actions';

const initialState = [{ text: 'Study Redux', completed: false, id: 0}];

const todos = (state = initialState, action) => {
    console.log('Reducer info', state, action.type, action.payload)
    switch (action.type) {
        case ADD_TODO: 
            return [...state, action.payload]
        default:
            return state;
    }
}

export default todos