export default (todos = [], action) => {
  console.log('from reducer', action);
  switch (action.type) {
      case 'ADD_TODO':
        return [...todos, action.payload];
      case 'REMOVE_TODO':
        const newTodo = todos.filter(x => x.id !== action.payload);
        console.log('filtered: ', newTodo);
        return newTodo;
       case 'TOGGLE_COMPLETE':
        const copyTodo = todos.map((todo)=>{
          if(todo.id === action.payload){
            todo.completed = !todo.completed;
          }
          return todo;
        });
        return copyTodo;
        
      default:
        return todos;
  }
};