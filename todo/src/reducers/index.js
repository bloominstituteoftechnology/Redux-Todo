import { CREATE_TODO, TOGGLE_COMPLETED } from '../actions';

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
    case TOGGLE_COMPLETED:
      let todo = state.todos[action.payload.index];
      todo = {...todo, completed: todo.completed ? false : true}
      return {...state, todos: Object.assign([...state.todos], {[action.payload.index]: todo})};
    default:
      return state;
  }
};