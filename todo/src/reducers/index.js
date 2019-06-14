import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const todos = []; 

const rootReducer = (state = {todos}, action) => {
  switch (action.type) {
      case ADD_TODO:
        return Object.assign({}, state, {
            todos: [...state.todos,{
            todo: action.payload, completed: false, id: Date.now()}
        ]})
      case TOGGLE_COMPLETED:
      console.log('clicked');
      let newTodo = [...state.todos].map(todo=> 
        (todo.id===action.payload) ?
          {...todo, completed:!todo.completed} : todo )

      return Object.assign({}, {todos: newTodo})
      

      default:
        return state;
  }

};

export default rootReducer;