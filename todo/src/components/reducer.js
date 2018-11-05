import { ADD_TODO, COMPLETED, DELETED} from './action';

const initialState = {
  todos:[
    {
      id:Date.now(),
      todo:"buy milk",
      completed:false
    }
    
  ] 
};

export default ( state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          todo: action.payload.todo,
          id: Date.now(),
          completed: false
        }
      ]
    });
    case COMPLETED:
    const newState = state.todos.map(item =>{
      if (item.id === action.payload){
        return{ 
          id:item.id , 
          todo:item.todo,
          completed:!item.completed
        }
      }
      else{
        return item
      }
    });
    return Object.assign({}, state, { todos: newState });

    case DELETED:
    const incompleteState = state.todos.filter(item =>{
      return item.id !== action.payload
    });
    return Object.assign({}, state, { todos: incompleteState });

    default:
    return state;
  }
}