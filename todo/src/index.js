import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './reducer';
//Local Storage Stuff
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
// Above: The specific function from lodash is located, so we don't end up throwing in the entire library to just use one function.

const dummyData = [
    {
        id: 1,
        value: "Walk Dog",
        completed: false,
    },
        {
        id: 2,
        value: "Netflix and Chill",
        completed: false,
    },
        {
        id: 3,
        value: "Play Poker",
        completed: false,
    },
]; // Above: Just some dummy data to throw into `createStore` to check things are working.

// Call `loadState` to load state from localStorage
const persistedState = loadState();
// Set that state as the initial state for our store object
// Remember, if there's an error or exception, persistedState will be undefined, which simply gives us a blank slate for our initial state.
const store = createStore(todoReducer, persistedState);

// The store object has a subscribe method. This method is a change listener. This means that this method will be called whenever there's an action dispatch, which usually means something in state has changed.
// We put a callback function that will call the `getState` method from store, and uses the result of that as an argument for the `saveState` function. In essence, a snapshot of state will be saved to local storage everytime a dispatch is fired.
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));
// Above, the throttle function is a function from a library called 'lodash'. Dan explains that JSON.stringify is an expensive process (in terms of time/performance), so advises limiting the calling of `saveState`. `throttle` does this by limiting `saveState` calls to only once per the duration passed into throttle, which is 1000ms (1 second) here. 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();