import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todos from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore(todos)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
