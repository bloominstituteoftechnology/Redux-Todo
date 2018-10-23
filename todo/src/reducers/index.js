import {ADD_ITEM, CROSS_OUT} from '../actions'

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

    case 'CROSS_OUT':
      console.log('this is from the reducer', action.payload)
      return {

        ...state,
        todos: state.todos.map((item, index) => {
          if(index === action.payload) {
            console.log(item, action.payload)
            return {...item, completed: !item.completed}
          } else {
            return item;
          }
        })


      }

    default:
      return state;
  }
}


export default todo;
