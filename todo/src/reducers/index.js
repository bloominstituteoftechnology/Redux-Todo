import {} from '../actions'

const initialState = {
  todos: [
    {value: 'walk dog', completed: false},
    {value: 'dishes', completed: false},
    {value: 'pay bills', completed: true},
  ]
}


const todo = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {...state, todos: [...state.todos, {value: action.payload, completed: false}]}

    default:
      return state;

  }
}


export default todo;
