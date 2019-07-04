import {
  LOAD_TODOS_START,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from '../actions';

import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../actions';

import {
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from '../actions';

import {
  TOGGLE_STATUS_START,
  TOGGLE_STATUS_SUCCESS,
  TOGGLE_STATUS_FAILURE,
} from '../actions';

const initialState = {
  todos: [
    {
      user: '',
      text: 'Learn Redux',
      status: false,
      date: '',
    },
  ],
  loadingTodos: false,
  errorLoadingTodos: '',
  addingTodo: false,
  errorAddingTodo: '',
  isDeleting: false,
  errorDeleting: '',
  isToggling: false,
  errorToggling: '',
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS_START:
      return {
        ...state,
        loadingTodos: true,
      };
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload],
        loadingTodos: false,
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        loadingTodos: false,
        errorLoadingTodos: false,
      };
    case ADD_TODO_START:
      return {
        ...state,
        addingTodo: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload].sort((a, b) =>
          a._id > b._id ? 1 : b._id > a._id ? -1 : 0,
        ),
        addingTodo: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        addingTodo: false,
        errorAddingTodo: action.payload,
      };
    case DELETE_TODO_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo._id !== action.payload.todo._id),
        ].sort((a, b) => (a._id > b._id ? 1 : b._id > a._id ? -1 : 0)),
        isDeleting: false,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorDeleting: action.payload,
      };
    case TOGGLE_STATUS_START:
      return {
        ...state,
        isToggling: true,
      };
    case TOGGLE_STATUS_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo._id !== action.payload._id),
          action.payload,
        ].sort((a, b) => (a._id > b._id ? 1 : b._id > a._id ? -1 : 0)),
        isToggling: false,
      };
    case TOGGLE_STATUS_FAILURE:
      return {
        ...state,
        isToggling: false,
        errorToggling: action.payload,
      };
    default:
      return state;
  }
}

export default todoReducer;
