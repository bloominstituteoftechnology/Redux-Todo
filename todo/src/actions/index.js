export const ADD_ITEM = 'ADD_ITEM';

export const addTodo = item => {
  console.log('inside the action', item)
    return {
      type: ADD_ITEM,
      payload: item
    }

}

export const crossOut = id => {
  return {}
}
