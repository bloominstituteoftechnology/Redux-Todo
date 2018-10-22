import { ADD_TODO } from '../actions';

const initialState = {
  todos: [ {
      value: 'test',
      completed: false,
    },
    {
      value: 'another test',
      completed: false,
    }]
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
    return { todos: state.todos += action.payload }

    default:
    return state;
  }
}
