import { ADD_TODO } from '../actions';
 
const initialState = { 
    todos: [
        {
        text: 'Walk the dog.',
        completed: false
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload, 'action payload')
           const newObj = Object.assign({}, state);
           newObj.todos.push(action.payload)
           return newObj;
        default:
            return state;
    }
}