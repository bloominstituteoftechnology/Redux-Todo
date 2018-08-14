import { ADD_TODO, DEL_TODO, TOGGLE_TODO, FILTER_TODO } from '../actions/index';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        action.todo
      ]
    case DEL_TODO:
      return todos.filter(todo => todo.id !== action.todo.id)
    case TOGGLE_TODO:
     return todos.map(todo => 
               (todo.id === action.todo.id) 
                ? {...todo, isCompleted: !todo.isCompleted}
                : todo
            )
    case FILTER_TODO:
      return todos.filter(todo => {
              return todo.isCompleted === false
             })
    default:
      return todos;
  }
}