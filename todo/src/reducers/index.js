
export default (todos=[], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: Date.now(),
          value: action.value,
          completed: false
        }
      ];
    default:
      return todos;
  }
}
