var shortid = require('shortid');

const initialState = {
  todos: [
    {
      value: 'Walk the dog',
      completed: false,
      id: shortid.generate()
    },
    {
      value: 'Finish Redux Todo App',
      completed: false,
      id: shortid.generate()
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          value: action.value,
          completed: false,
          id: shortid.generate()
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todoReducer;
