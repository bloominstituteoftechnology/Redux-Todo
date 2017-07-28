
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { 
          id: action.id,
          todo: action.todo,
          completed: false
        }
      ]
  default:
    return state
  } 
};

export default todosReducer;