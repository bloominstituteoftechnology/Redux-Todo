import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = [
    { task: 'Learn Redux', completed: false, id: Date.now() }
];

export default (state = initialState, action) => {
    return state;
};