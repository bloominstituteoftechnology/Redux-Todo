import { ADDTODO, TOGGLE } from '../actions';


export default (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
          return state;
  }
};
