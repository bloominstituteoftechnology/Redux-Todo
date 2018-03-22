const state = []

// Actions => tells the reducer which action to perform and provides the values
const action = [
  { type: 'ADD_TODO', text: 'do laundry', completed: false, id: 0 },
  { type: 'ADD_TODO', text: 'walk the kids', completed: false, id: 1 },
  { type: 'ADD_TODO', text: 'take the dogs to school', completed: false, id: 2 },
  { type: 'ADD_TODO', text: 'water the plant', completed: false, id: 3 },
  { type: 'ADD_TODO', text: 'finish this assignment', completed: false, id: 4 },
  { type: 'REMOVE_TODO', id: 0 },
  { type: 'REMOVE_TODO', id: 3 },
  { type: 'TOGGLE_TODO', id: 4 }
]

// Reducer => does all the work and returns a new state
function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      const { text, completed, id } = action
      return [...state, { text, completed, id }]
    case 'REMOVE_TODO':
      return [...state.filter(todo => todo.id !== action.id)]
    case 'TOGGLE_TODO':
      const { completed } = action
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !completed } : todo)
    default:
      return state
  }
}

console.log(action.reduce(reducer, state))