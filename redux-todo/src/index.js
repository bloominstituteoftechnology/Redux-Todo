import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './App';

const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));
