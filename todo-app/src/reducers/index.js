import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';
import TodoForm from '../components/TodoForm';

const initailState = {
    todos: [
        {todo: 'Add a Todo... Once Completed, Click Me', completed: false}
    ]
}

 const rootReducer = (state = initailState, action) => {
    switch(action.type){
        case ADD_TODO:
        const newTodo = { todo: action.payload, completed: false}
        return {
           ...state,
           todos: [...state.todos, newTodo]
         }
         case TOGGLE_COMPLETED:
         return {
             ...state,
             todos: state.todos.map((todo) => action.payload === todo.todo ? {...todo, completed: !todo.completed} : todo)
         }
         default:
         return state
    }
     
 }

 export default rootReducer;