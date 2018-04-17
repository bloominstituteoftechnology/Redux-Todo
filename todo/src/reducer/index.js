import { ADD_TO_DO, HIDE_TO_DO } from '../action';





export default (todos = [{value: 'Mark'}], action) => {
  switch (action.type) {
    case ADD_TO_DO:
    return null;
    case HIDE_TO_DO:
    return null;
    default:
      return todos;
  }
};
