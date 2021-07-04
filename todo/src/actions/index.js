import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, DELETE_TODO } from '../reducers';

export const addTodo = value => {
    console.log(value);
    return {
      type: ADD_TODO,
      payload: value
    };
  };

export const completeTask = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}

export const removeCompleted = () => {
    return {
        type: REMOVE_COMPLETED
    }
};

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}