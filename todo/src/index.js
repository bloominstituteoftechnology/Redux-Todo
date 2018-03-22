import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todos from './reducers';
// Main Styles
import './index.css';
// Unused Service Worker
import registerServiceWorker from './registerServiceWorker';

// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (which is none in this case).
const store = createStore(todos);

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
