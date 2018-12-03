import { ADD } from '../reducers';

export function addTodoItem(item) {

  return {

    type: ADD,
    payload: { value: item, completed: false }

  }

}
