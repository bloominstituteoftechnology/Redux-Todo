import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './reducer';
import { loadState, saveState } from './localStorage'

// const dummyData = [
//     {
//         id: 1,
//         value: "Walk Dog",
//         completed: false,
//     },
//         {
//         id: 2,
//         value: "Netflix and Chill",
//         completed: false,
//     },
//         {
//         id: 3,
//         value: "Play Poker",
//         completed: false,
//     },
// ];

const persistedState = loadState();
const store = createStore(
    todoReducer,
    persistedState
);

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();