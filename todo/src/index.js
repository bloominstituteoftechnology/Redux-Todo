import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'Redux';
import { Provider } from 'react-redux';
import todos from './reducers';


// This line will update the Redux store when the reducer fires.
const store = createStore(todos);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
