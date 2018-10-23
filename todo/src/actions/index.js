export const ADD_ITEM = 'ADD_ITEM';
export const CROSS_OUT = 'CROSS_OUT';

export const addTodo = item => {
  console.log('inside the action', item)
    return {
      type: ADD_ITEM,
      payload: item
    }

}

export const crossOut = index => {
  return {
    type: 'CROSS_OUT',
    payload: index
  }
}
