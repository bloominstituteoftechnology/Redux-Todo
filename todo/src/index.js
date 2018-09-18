import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//import reducer
import { addTodo } from './reducer/index';

const store = createStore(addTodo);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
