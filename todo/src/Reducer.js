import { NEWTODO, COMPLETED, DELETED } from './Actions';

const initialState = {
  todo: []

}


export default (state = initialState, action) => {
  console.log(state.todo)
  switch (action.type) {
    case NEWTODO:
      return { todo: [...state.todo, action.payload] }
    // Fill in the body of this case
    case COMPLETED:
      return {
        todo: state.todo.map(obj =>
          (action.payload === obj.value)
            ? { ...obj, completed: !obj.completed }
            : obj,
        )
      }
    case DELETED:
    
      return {
        todo: state.todo.filter(obj =>
          obj.id !== action.payload
        )
      }
    // Fill in the body of this case
    default:
      return state;
  }
};
