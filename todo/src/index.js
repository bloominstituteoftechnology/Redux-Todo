import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';

const store = createStore(Reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));