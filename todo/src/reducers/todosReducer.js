// default items
const initialState = [
    {
      id: 0,
      text: 'Crush enemies.',
      completed: false
    },
    {
      id: 1,
      text: 'See enemies driven before me.',
      completed: false

    },
    {
      id: 2,
      text: 'Hear lamentations of enemies\' women.',
      completed: false
    }
];

// const todos = (state = [], action) => {
const todos = (state = initialState, action) => {
  // console.log('>>>>>>>REDUCER: src/reducers/todosReducer.js')
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   );
    default:
      return state;
  }
}

export default todos;
