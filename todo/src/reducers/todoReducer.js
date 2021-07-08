import { ADD } from '../actions/actionTodo';

export default function todoReducer(todos = [{value: 'study whole day'}, 
{value: 'dont give a shit'}], action) {
  switch (action.type) {
    case ADD:
      return [...todos, {value: action.newTodo} ];
    // case 'DONE':
    //   return !action.completed;
    default:
      return todos;
  }
};