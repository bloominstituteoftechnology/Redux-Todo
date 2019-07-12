export const completeItem = (item) => {
    return {
      type: 'COMPLETE_ITEM',
      payload: item.id
    };
  };

export const addItem = (item) => {
    return ({type: 'ADD_ITEM', payload: item})
}

export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED',
  };
};