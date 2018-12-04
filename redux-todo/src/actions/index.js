import { ADD, TOGGLE } from '../reducers';

export function addTodoItem(item) {

  return {

    type: ADD,
    payload: { value: item, completed: false }

  }

}

export function toggleTodoItem(id) {

  return {

    type: TOGGLE,
    id: id

  }

}
