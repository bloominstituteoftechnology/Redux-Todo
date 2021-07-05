//Main index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { todoReducer } from './reducer'

const store = createStore(todoReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
