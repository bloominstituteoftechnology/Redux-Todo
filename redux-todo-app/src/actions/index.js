export const addItem = (item) => {
  console.log(item);
  return {type: 'ADD_ITEM', payload: item}
}

export const deleteItem = (item) => {
  console.log(item);
  return {type: 'DELETE_ITEM', payload: item}
}

export const updateItem = (originalItem, newItem) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      original: originalItem,
      updatedItem: newItem
    }
  }
}