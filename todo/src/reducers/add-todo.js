export default (stateProp = null, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...stateProp.todos, action.payload];
    default:
      return stateProp;
  }
}