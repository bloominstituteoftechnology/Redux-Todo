import uuidv1 from 'uuid/v1';
import { ADD_TODO } from '../actions/actions';

const reducer = (state = { todos: [] }, action) => {
  const { todos, ...rest } = state;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...rest,
        todos: [...todos, { id: uuidv1(), text: action.payload.text, completed: false }],
      };

    default: return state;
  }
};

export default reducer;
