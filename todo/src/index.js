// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import indexReducer from './reducers';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Styles
import './index.css';

const store = createStore(indexReducer);

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
