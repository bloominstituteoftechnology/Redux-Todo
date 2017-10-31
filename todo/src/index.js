import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = //something

store.subscribe(() => {
    const state = store.getState();
    //something
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
