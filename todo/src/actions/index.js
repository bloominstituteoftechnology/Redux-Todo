import { loadProgressBar } from 'axios-progress-bar';
import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const userLogin = username => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  loadProgressBar();
  return axios
    .get('https://apirestnodeexpressmongo.herokuapp.com/users')
    .then(res => {
      if (res.data.filter(user => user.name === username).length > 0) {
        let userFound = res.data.filter(user => user.name === username)[0].name;
        localStorage.setItem('user', userFound);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: userFound });
      }
    })
    .catch(err => {
      localStorage.setItem('err', err);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const userSignUp = username => dispatch => {
  dispatch({ type: USER_REGISTER_START });
  loadProgressBar();
  console.log(' TRYING TO REGISTER NOT SIGNED UP USER: ', username);
  return axios
    .post(
      'https://apirestnodeexpressmongo.herokuapp.com/users',
      { name: username },
      {
        headers: {
          'Content-Type': `application/json`,
        },
      },
    )
    .then(res => {
      localStorage.setItem('user', res.data.name);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.name });
    })
    .catch(err => {
      console.log('GET ALL USERS ERR: ', err);
      localStorage.setItem('signuperr', err);
      dispatch({ type: USER_REGISTER_FAILURE });
    });
};

export const LOAD_TODOS_START = 'LOAD_TODOS_START';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const loadTodos = () => dispatch => {
  dispatch({ type: LOAD_TODOS_START });
  loadProgressBar();
  return axios
    .get('https://apirestnodeexpressmongo.herokuapp.com/todos')
    .then(res => {
      dispatch({ type: LOAD_TODOS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addTodo = todo => dispatch => {
  dispatch({ type: ADD_TODO_START });
  loadProgressBar();
  return axios
    .post('https://apirestnodeexpressmongo.herokuapp.com/todos', todo, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
    .then(res => {
      dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TODO_FAILURE });
    });
};

export const DELETE_TODO_START = 'DELETE_TODO_START';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO_START });
  loadProgressBar();
  return axios
    .delete(`https://apirestnodeexpressmongo.herokuapp.com/todos/${id}`)
    .then(res => {
      dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_TODO_FAILURE });
    });
};

export const TOGGLE_STATUS_START = 'TOGGLE_STATUS_START';
export const TOGGLE_STATUS_SUCCESS = 'TOGGLE_STATUS_SUCCESS';
export const TOGGLE_STATUS_FAILURE = 'TOGGLE_STATUS_FAILURE';

export const toggleTodoStatus = todo => dispatch => {
  dispatch({ type: TOGGLE_STATUS_START });
  loadProgressBar();
  return axios
    .patch(
      `https://apirestnodeexpressmongo.herokuapp.com/todos/${todo._id}`,
      { status: todo.status },
      {
        headers: {
          'Content-Type': `application/json`,
        },
      },
    )
    .then(res => {
      dispatch({ type: TOGGLE_STATUS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TOGGLE_STATUS_FAILURE });
    });
};
