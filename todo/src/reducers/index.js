import { ADD_TASK, TOGGLE_COMPLETE } from '../actions';
const initialState = {
  todos: [
    { task: 'Bake cupcakes', completed: false, id: 0 },
    { task: 'Eat cupcakes', completed: false, id: 1 },
    { task: 'Code for 3 hours', completed: true, id: 2 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTask]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, id) =>
          action.payload === id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};
