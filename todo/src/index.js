import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import rootReducer from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)



ReactDOM.render(
<Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}> 
    <App />
</Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
