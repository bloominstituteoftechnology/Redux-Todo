import { NEWTODO, COMPLETED, DELETED } from './Actions';

const initialState = {
  todo: []

}


export default (state = initialState, action) => {
  switch (action.type) {
    case NEWTODO:
      return { todo: [...state.todo, action.payload] }
    case COMPLETED:
      return {
        todo: state.todo.map(obj =>
          (action.payload === obj.id)
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
    default:
      return state;
  }
};
