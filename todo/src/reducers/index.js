import { FETCH_TODOS } from '../actions';

const todosReducer = (todos = [], action) => {
  
  switch (action.type) {
    case FETCH_TODOS:
      return [...todos, ...action.payload];
    default:
      return todos;
  }
};

export { todosReducer };