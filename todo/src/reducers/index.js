export default (todo = [], action) => {
  console.log('from reducer', action);
  switch (action.type) {
      case 'ADD_TODO':
        return [...todo, action.payload];
      case 'REMOVE_TODO':
        const newTodo = todo.filter(x => x.id !== action.payload);
        console.log('filtered: ', newTodo);
        return newTodo;
      default:
        return todo;
  }
};