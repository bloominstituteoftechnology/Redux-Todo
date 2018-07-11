import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const todos = [{todo: 'pick up groceries', completed: false}, 
               {todo: 'make dinner', completed: false},
               {todo: 'skydive', completed: true}]; 

const rootReducer = (state = {todos}, action) => {
  switch (action.type) {
      case ADD_TODO:
        return Object.assign({}, state, {
            todos: [...state.todos,{
            todo: action.payload, completed: false}
        ]});
      case TOGGLE_COMPLETED:
      console.log('clicked');
      todos[action.payload].completed = !todos[action.payload].completed;

      default:
        return state;
  }

};

export default rootReducer;