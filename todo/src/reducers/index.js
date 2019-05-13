import { NEW_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: [
    {
      text: 'Learn Redux',
      id: 1557778493298,
      completed: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.text, id: Date.now(), completed: false },
        ],
      };
    //   ...state,
    //   {
    //     text: action.text,
    //     id: Date.now(),
    //     completed: false,
    //   },
    // ];
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    // return state.todos.map(todo =>
    //   todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    // );
    default:
      return state;
  }
};

export default todos;
