export default (state = null, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('payload: ', action.payload);
      // console.log(state)
      return state
    default:
      return state;
  }
}