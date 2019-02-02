import { ADD_TODO } from '../actions/actions';

const initialState = {
    todos: [
        {
            value: 'Walk the dog.',
            completed: false
          }
    ]
};

export default function reducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        // case ADD_TODO:
        //return statement
        default:
            return state;
    }
}