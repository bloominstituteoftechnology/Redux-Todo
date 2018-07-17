import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import Todos from './reducers/Todos';
import registerServiceWorker from './registerServiceWorker'

const store = createStore(Todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={createStore(Todos)}>
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

