const TodoListDefaultState = {todoList: []};

export default (state = TodoListDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList : [
          ...state.todoList, // lay out the previous state's todos. Has to be enclosed in []
                          // because the state itself is an array
          {
            description: action.todo.description,
            completed : action.todo.completed,
            id: action.todo.id
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todoList : state.todoList.map((todo) =>
          (todo.id === action.id)? {...todo, completed: !todo.completed}: todo
        )
      };
    default: return state;
  }
};