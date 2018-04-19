import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todolist from './components/todolist'
import todos from './reducers/reducers';
// import 
//insert component for reducer
//insert Reducer
 
const store = createStore(todos);

ReactDOM.render(

<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));
registerServiceWorker();
