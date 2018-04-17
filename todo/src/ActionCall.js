import store from './index';
export const ADD_TODO = 'ADD_TODO';

export const Add_todo = () => {
    store.dispatch({type: ADD_TODO})
  };
