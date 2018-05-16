import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


// const store = createStore(
//     reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );


// const store = createStore(reducer);
ReactDOM.render(
<Provider store={createStore(reducer)}>
    <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
