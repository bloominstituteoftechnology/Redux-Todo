import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer/reducer';

export default () => {
  let storedData;

  try {
    storedData = window.localStorage.getItem('saved-todos');
    if (storedData === null) {
      storedData = undefined;
    }
    storedData = { ...JSON.parse(storedData) };
  } catch (error) {
    storedData = undefined;
  }

  const store = createStore(reducer, storedData, devToolsEnhancer());

  store.subscribe(() => {
    store.getState();
    try {
      const { byId, allIds } = store.getState();
      window.localStorage.setItem('saved-todos', JSON.stringify({ byId, allIds }));
    } catch (error) {
      console.log(error);
    }
  });
  return store;
};
