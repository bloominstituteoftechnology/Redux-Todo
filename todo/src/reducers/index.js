import { CREATE_TODO } from '../actions';

const initialState = {
  todos: [
    {value: 'Milk', completed: false},
    {value: 'Eggs', completed: false},
    {value: 'Bread', completed: false},
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};