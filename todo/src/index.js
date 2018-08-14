import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// const store = createStore(todos);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);
