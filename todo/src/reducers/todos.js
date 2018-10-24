
const todos = (state = [], action) => {
    console.log('hi');
    switch (action.type) {
      case ADD_TODO:
      return [
        ...state,
        {
          id: action.index,
          text: action.value,
          completed: false
        }
      ]

      case UPDATE_TODOITEM :
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
        default:
        return state
     }

      };
      export default todos