import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const TodoApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
ReactDOM.render(<TodoApp/>, document.getElementById('root'));
registerServiceWorker();
