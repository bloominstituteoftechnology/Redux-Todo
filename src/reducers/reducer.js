import {ADDTODO} from '../actions/actions.js';
import {TOGGLECOMPLETE} from '../actions/actions.js';
import {DELETECOMPLETED} from '../actions/actions.js';
import {SAVE} from '../actions/actions.js';
//
const initialState = {
  todos: [
    {
      value: 'test',
      date: '12/31/2019',
      completed: false,
    },
  ],
};

const thewindow = window.localStorage;
const local = JSON.parse(thewindow.getItem('todos'));

export const reducer = (state = local, action) => {
  switch (action.type) {
    case ADDTODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });
    case TOGGLECOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index == action.index) {
            console.log(todo);
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      };
    case DELETECOMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.completed === false;
        }),
      };
    case SAVE:
      let todos = JSON.stringify({...state});
      window.localStorage.setItem('todos', todos);
    default:
      return state;
  }
};
