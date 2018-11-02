import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
  todos: [
    {
      todo: 'Walk the dog',
      completed: false,
      id: 100
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state,
        { todos: [...state.todos, { id: action.id, todo: action.text, completed: false}]

        })
    default:
      return state
  }
}

export default reducer;