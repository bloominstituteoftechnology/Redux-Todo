
export default (state = ['Clean Up'], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      if(![...state].includes(action.payload)) {
        return [...state, action.payload];
      } else {
        return [...state];
      }
    case 'DELETE_ITEM':
      if([...state].includes(action.payload)) {
        return [...state].filter(item => item !== action.payload);
      } else {
        return [...state];
      }
    case 'UPDATE_ITEM':
      if(![...state].includes(action.payload.updateItem)) {
        return [...state].map(item => {
          if(item === action.payload.original) {
            item = action.payload.updatedItem
            return item;
          } else {
            return item;
          }
        })
      }
    default:
      return state
  }
}