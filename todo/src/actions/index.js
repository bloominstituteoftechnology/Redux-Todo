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

///nothing much to say here, just passing some payloads with the actions that take parameters and only passing a type with the plain action///