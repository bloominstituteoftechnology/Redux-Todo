const todos = (state = [], action) => {
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
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state;
  }
}

export default todos;





// export default () => {
//   // console.log('>>>>>>>REDUCER: src/reducers/todosReducer.js')
//   return [
//     {
//       id: 1,
//       todoText: 'wash car.',
//       completed: false
//     },
//     {
//       id: 2,
//       todoText: 'polish MyLittlePony statues.',
//       completed: false
//
//     },
//     {
//       id: 3,
//       todoText: 'finish LS-React project.',
//       completed: false
//     }
//   ]
// }
