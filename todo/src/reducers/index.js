import {
  NEW_TASK
 } from '../actions';

export default (tasks = [], action) => {
  switch (action.type) {
    case NEW_TASK:
      return tasks.concat(action.payload);
    default:
      return tasks;
  }
};