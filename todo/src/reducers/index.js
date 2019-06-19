/////setting initial state/////

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
      ///if ADD_ITEM comes through, we push the payload to our state's items array///
      return {
        ...state,
        items: [...state.items,action.payload]
      };
    case 'COMPLETE_ITEM':
      ///if COMPLETE_ITEM comes through, we map over each item in our items array with an if////////
      ///statement so that we can change the item with the matching ID to show 'completed: true'////
      return {
        ...state,
        items: state.items.map(item => {
          console.log(item.name)
          console.log(item)
          if(item.id === action.payload) {
            return {...item, completed: !item.completed}
          }
          return {...item}
        })
      };
      ///if CLEAR_COMPLETED comes through, we filter out the 'completed: true' items from our state.///
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