export const completeItem = (item) => {
    return {
      type: 'ITEM_COMPLETED',
      payload: item,
    };
  };

export const addItem = (item) => {
    return {
        type: 'ITEM_ADDED',
        payload: item,
    }
}