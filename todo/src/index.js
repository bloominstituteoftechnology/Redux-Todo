import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
