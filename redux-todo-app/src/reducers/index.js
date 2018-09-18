
export default (state = [], action) => {
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
      return [...state].map(item => {
        if(item === action.payload.original) {
          item = action.payload.updatedItem
          return item;
        } else {
          return [...state];
        }
      })
    default:
      return state
  }
}