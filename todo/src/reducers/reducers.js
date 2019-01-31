import { ADD_TODO, COMPLETED} from '../actions/actions';

const initialState = {
  todo: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return {todo: [...state.todo, action.payload]}
    case COMPLETED:
      console.log('completed');
      return {todo: state.todo.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)}
    default:
      return state;
  };
};
