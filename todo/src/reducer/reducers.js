import { ADD_TASK, TOGGLE_COMPLETED  } from '../action/actions';

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
      const NewState = state.todo.map(item => (
        item.id === action.payload) ? { ...item,completed: !item.completed} : item)
      return {
        todo: NewState
      };

    default:
      return state
  }
}