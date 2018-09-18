export default function reducer(state, action) {
  console.log('in reducer: ', action);
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return { ...state, number: action.payload };
    default:
      return state;
  }
}
