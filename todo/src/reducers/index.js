export const initialState = {
  item: '' 
};

export default function itemReducer(state = initialState, action) {
  console.log('in reducer: ', action);
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
