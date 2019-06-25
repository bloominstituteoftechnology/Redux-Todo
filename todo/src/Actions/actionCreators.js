import uuid from 'uuid';
import {
    ADD_TODO,
    TOGGLE_COMPLETE
} from '../Actions/actionTypes'

export function addTodo(value) {
    return {
      type: ADD_TODO,
      payload: {
        value,
        id: uuid(),
        completed: false
      }
    };
  }

  export function toggleComplete(id) {
    return {
      type: TOGGLE_COMPLETE,
      payload: id
    };
  }