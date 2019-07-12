const initialState = {
    items: [
      { name: 'Thing 1', completed: false, id: 1 },
      { name: 'Thing 2', completed: false, id: 2 },
      { name: 'Thing 3', completed: false, id: 3 },
      { name: 'Thing 4', completed: false, id: 4 },
    ]
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items,action.payload]
        };

      case 'COMPLETE_ITEM':
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === action.payload) {
              return {...item, completed: !item.completed}
            }
            return {...item}
          })
        };

      case 'CLEAR_COMPLETED':
        return {
          ...state,
          items: state.items.filter(item => !item.completed)
        };
      default:
        return state;
    }
  }
  
  export default reducer;