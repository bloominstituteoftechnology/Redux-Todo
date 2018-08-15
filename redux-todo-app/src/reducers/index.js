import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions';

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
        mixedQuotes.push(quotes.splice(pick, 1));
      }

    return Object.assign({}, state, { todoList: aTodos, headingQuote: mixedQuotes });

    case COMPLETE_TODO:
      let cTodos = state.todoList.slice();
      if (cTodos[0].id !== 2049) {
        let crossItem = cTodos.filter(item => item.item.toLowerCase() === action.payload);
        crossItem[0].completed = !crossItem[0].completed
      }  
    return Object.assign({}, state, { todoList: cTodos });

    case DELETE_TODO:
      let dTodos = state.todoList.slice();
      let newTodos = dTodos.filter(item => item.completed !== true);
      if (newTodos.length === 0) {
        newTodos.push({
          item: 'Nothing To Do 😃',
          description: 'This is an example your todo description... Add a todo to get started!',
          id: 2049,
          completed: false
        })
      }
    return Object.assign({}, state, { todoList: newTodos });

    default:
      return state;
  }
};