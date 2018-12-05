import { ADD_TODOTASK, TOGGLE_COMPLETED, } from '../reducers';

export const addTodoTask = taskItem => {
  console.log(taskItem);
  return {
    type: ADD_TODOTASK,
    payload: taskItem,
  };
};

export const toggleCompleted = index => {
  console.log(index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index,
  };
};


export const deleteTasks = id => {
  console.log (id);
  // return {
  //   type: DELETE_ID,
  //   payload: id,
  // };
};
