import store from './index';

store.dispatch({
    type: 'ADD_TODO',
    text: 'BlablablA',
    completed: false
  })