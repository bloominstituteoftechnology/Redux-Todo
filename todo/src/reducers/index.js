import {UPDATE_TODOS} from '../actions';

const initialState= {
    todos:[
        {
           value: 'Walk the dog',
           completed: false 
        }
    ]
}

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}

export default todoReducer;