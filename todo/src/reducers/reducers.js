import { ADD_TODO, COMPLETED} from '../actions/actions';

const initialState = {
  todo: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return {todo: [...state.todo, action.payload]}
    case COMPLETED:
      return
    default:
      return state;
  };
};
