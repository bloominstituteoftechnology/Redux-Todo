import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';


ReactDOM.render(<Provider store={createStore(() => { },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)}>
    <App />
</Provider>, document.getElementById('root'));