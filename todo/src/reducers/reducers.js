

export default (todo = ['testing'], action) => {
  switch (action.type) {
    case 'SUBMIT':
      todo.push(action.payload);
      console.log('submitted ', action.payload);
      return todo;
    default:
      return todo;

  }
}
