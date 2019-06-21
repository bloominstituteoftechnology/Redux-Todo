const initial = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Learn how to code.',
      completed: false
    },
    {
      value: 'Zelda',
      completed: false
    }
  ],
  text: ''
};

const todosReducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('add todo working');
      return {
        ...state,
        todos: [...state.todos, { value: state.text, completed: false }],
        text: ''
      };

    case 'INPUT_TEXT': // every time you update and press a key
      console.log(action.payload);
      return { ...state, text: action.payload }; //replacing text
    default:
      return state;
  }
};

export default todosReducer;
