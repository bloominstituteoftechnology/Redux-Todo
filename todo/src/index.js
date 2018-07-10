import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { localState, saveState } from './persistence';


const load = localState();
const store = createStore(
    reducer,
    load
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));