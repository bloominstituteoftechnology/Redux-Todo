let defaultState = [
  {id: 99, text: 'water the dog', completed: false},
  {id: 98, text: 'drop the plants off at school', completed: false},
  {id: 97, text: 'walk the milk', completed: true},
  {id: 96, text: 'buy kids', completed: false}
]

const todos = (state = defaultState , action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // case 'REMOVE_TODO':
    //   const filtered = state.filter(todo => todo.id !== action.id)
    //   return filtered
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
