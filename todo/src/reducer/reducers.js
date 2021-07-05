import { ADD_TASK, TOGGLE_COMPLETED, DELETE_COMPLETED, DELETE_ITEM  } from '../action/actions';

const initialState = {
  todo: [{
      name: 'test',
      id: Date.now(),
      completed: false
    },
    {
      name: 'shit todo',
      id: 2,
      completed: false
    }
  ]
}
export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TASK:
      return { ...state,
        todo: [...state.todo, {
          name: action.payload,
          id: Date.now(),
          completed: false
        }]
      };

    case TOGGLE_COMPLETED:
    console.log('clicked');
      const NewState = state.todo.map(item => (
        item.id === action.payload) ? { ...item,completed: !item.completed} : item)
      return {
        todo: NewState,
      };

      case DELETE_COMPLETED:
      const noIncomplete = state.todo.filter(item =>(
        !item.completed))
        return {
          todo: noIncomplete
        }
      
      case DELETE_ITEM:
      const singleDelete = state.todo.filter(item=>
        item.id !== action.payload)
     return {
       todo: singleDelete
     }

    default:
      return state
  }
}