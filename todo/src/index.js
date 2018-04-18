import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducers'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore(Reducer)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
