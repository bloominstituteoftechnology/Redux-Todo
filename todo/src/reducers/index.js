import {ADD_NEW_TODO} from '../actions';

const initialState =  {
    todos: [
    {
    value: 'Walk the dog.',
    completed: false,
    id: Math.random()
  }]
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_TODO:
        console.log('action state: ', state.todos.concat(action.payload))
         return Object.assign({}, state, { todos: [...state.todos, action.payload] });
        default:
        return state;
    }
}