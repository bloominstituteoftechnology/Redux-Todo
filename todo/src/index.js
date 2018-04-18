import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; // tool from redux to allow us to create a "store".
import { Provider } from 'react-redux'; // tool to wrap around our app.
import reducer from '.Reducers';

const store = createStore(Combinedreducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
