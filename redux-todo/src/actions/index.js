export const ADD = 'ADD';

export function addTodoItem(item) {

  return {

    type: ADD,
    payload: item

  }

}
