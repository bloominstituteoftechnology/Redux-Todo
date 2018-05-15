import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
