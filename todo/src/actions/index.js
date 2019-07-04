import { loadProgressBar } from 'axios-progress-bar';
import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const userLogin = username => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  loadProgressBar();
  console.log('THIS WAS THE USERNAME: ', username);
  return axios
    .get('http://localhost:3000/users')
    .then(res => {
      if (res.data.filter(user => user.name === username).length > 0) {
        let userFound = res.data.filter(user => user.name === username)[0].name;
        localStorage.setItem('user', userFound);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: userFound });
      }
    })
    .catch(err => {
      console.log('GET ALL USERS ERR: ', err);
      localStorage.setItem('err', err);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

/* export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const userRegister = username => dispatch => {
  dispatch({ type: USER_REGISTER_START });
  loadProgressBar();
  console.log(' TRYING TO REGISTER NOT SIGNED UP USER: ', username);
  let header = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return (
    axios.post('http://localhost:3000/users'),
    header
      .then(res => {
        console.log('IS SIGNUP WORKING?: ', res);
        if (res.data.filter(user => user.name === username).length > 0) {
          localStorage.setItem(
            'user',
            res.data.filter(user => user.name === username)[0].name,
          );
        }
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log('GET ALL USERS ERR: ', err);
        localStorage.setItem('signuperr', err);
        dispatch({ type: USER_REGISTER_FAILURE });
      })
  );
};
 */

export const LOAD_TODOS_START = 'LOAD_TODOS_START';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const loadTodos = () => dispatch => {
  dispatch({ type: LOAD_TODOS_START });
  loadProgressBar();
  console.log('LOADING TODOS');
  return axios
    .get('http://localhost:3000/todos')
    .then(res => {
      console.log('GOT SOME TODOS BACKEND: ', res);
      dispatch({ type: LOAD_TODOS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('GET ALL TODOS ERR: ', err);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addTodo = todo => dispatch => {
  dispatch({ type: ADD_TODO_START });
  loadProgressBar();
  console.log('ADDING TODO: ', todo);
  return axios
    .post('http://localhost:3000/todos', todo, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
    .then(res => {
      console.log('GOT ADDED TODO BACKEND: ', res);
      dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('ADD TODO ERR: ', err);
      dispatch({ type: ADD_TODO_FAILURE });
    });
};

export const DELETE_TODO_START = 'DELETE_TODO_START';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO_START });
  loadProgressBar();
  console.log('DELETING TODO: ', id);
  return axios
    .delete(`http://localhost:3000/todos/${id}`)
    .then(res => {
      console.log('GOT RESPONSE DELETE TODO: ', res);
      dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('DELETE TODO ERR: ', err);
      dispatch({ type: DELETE_TODO_FAILURE });
    });
};

export const TOGGLE_STATUS_START = 'TOGGLE_STATUS_START';
export const TOGGLE_STATUS_SUCCESS = 'TOGGLE_STATUS_SUCCESS';
export const TOGGLE_STATUS_FAILURE = 'TOGGLE_STATUS_FAILURE';

export const toggleTodoStatus = todo => dispatch => {
  dispatch({ type: TOGGLE_STATUS_START });
  loadProgressBar();
  console.log('TOGGLING TODO: ', todo);
  return axios
    .patch(
      `http://localhost:3000/todos/${todo._id}`,
      { status: todo.status },
      {
        headers: {
          'Content-Type': `application/json`,
        },
      },
    )
    .then(res => {
      console.log('GOT RESPONSE TOGGLE TODO: ', res);
      dispatch({ type: TOGGLE_STATUS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('TOGGLE TODO ERR: ', err);
      dispatch({ type: TOGGLE_STATUS_FAILURE });
    });
};
