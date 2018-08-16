import { ADD_TODO, COMPLETE_TODO, DELETE_COMPLETED_TODOS, DELETE_TODO } from '../actions';

export const initialState = {
  todoList: [
    {
      item: 'Nothing To Do 😃',
      description: 'This is an example your todo description... Add a todo to get started!',
      id: 2049,
      completed: false
    }
  ],
  headingQuote: [
    'Make Today Count',
    'Succeed on Purpose',
    'Defy Your Limitations',
    'Strive For Progress',
    'Creativity Takes Courage',
    'If Not Now, When?',
    'Be The Best You',
    'Believe. Achieve. Succeed.',
    'Follow Your Bliss'
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    // Adding todo .. payload = todo obj
    // if id === 2049(default todo), delete default todo & add new todo
    // quotes get sliced at random and pushed to cache
    case ADD_TODO:
      let aTodos = state.todoList.slice();
      let quotes = state.headingQuote.slice();
      let length = quotes.length;
      let mixedQuotes = [];
      if (aTodos[0].id === 2049) aTodos.length = 0;
      let newTodo = { ...action.payload };
      aTodos.push(newTodo);

      for (let i = 0; i < length; i++) {
        const pick = Math.floor(Math.random() * (quotes.length));
        mixedQuotes.push(quotes.splice(pick, 1).join(''));
      }
      
    return Object.assign({}, state, { todoList: aTodos, headingQuote: mixedQuotes });

    // filters by id if todo is not default todo
    case COMPLETE_TODO:
      let cTodos = state.todoList.slice();
      if (cTodos[0].id !== 2049) {
        let crossItem = cTodos.filter(item => item.id === action.payload);
        crossItem[0].completed = !crossItem[0].completed
      }  
    return Object.assign({}, state, { todoList: cTodos });

    // filters by complete bool 
    // if no todos, add default todo
    case DELETE_COMPLETED_TODOS:
      let dcTodos = state.todoList.slice();
      let newTodos = dcTodos.filter(item => item.completed !== true);
      if (newTodos.length === 0) {
        newTodos.push({
          item: 'Nothing To Do 😃',
          description: 'This is an example your todo description... Add a todo to get started!',
          id: 2049,
          completed: false
        })
      }
    return Object.assign({}, state, { todoList: newTodos });

    // filters by id
    // if no todos, add default todo
    case DELETE_TODO:
      let dTodos = state.todoList.slice();
      let crossItems = dTodos.filter(item => item.id !== action.payload);
      if (crossItems.length === 0) {
        crossItems.push({
          item: 'Nothing To Do 😃',
          description: 'This is an example your todo description... Add a todo to get started!',
          id: 2049,
          completed: false
        })
      }
    return Object.assign({}, state, { todoList: crossItems });

    default:
      return state;
  }
};