import {ADD_TODO, TOGGLE_COMPLETED, DELETE_ITEM} from '../actions';

const initialState = {
  todos: [
    {
      task: 'walk the dog',
      complete: false,
      id: 0,
    },
    {
      task: 'do something else',
      complete: false,
      id: 1,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('reducer', action);
      const newId = state.todos.length;
      return {
        ...state,
        todos: state.todos.concat({
          task: action.payload,
          complete: false,
          id: newId,
        }),
      };
    case TOGGLE_COMPLETED:
      console.log('reducer');
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id == action.payload) {
            //console.log('found!');
            return {...t, complete: !t.complete};
          } else {
            //console.log('nooo');
            return t;
          }
        }),
      };
    case DELETE_ITEM:
      console.log('reducer delete');
      return {
        ...state,
        todos: state.todos.filter(t => t.id != action.payload),
      };
    default:
      console.log('default');
      return state;
  }
};
