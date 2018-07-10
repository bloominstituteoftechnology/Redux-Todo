import { ADD_TODO, TOGGLED_COMPLETED } from '../actions';

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
    //   case TOGGLE_COMPLETED:
         

      default:
        return state;
  }

};

export default rootReducer;