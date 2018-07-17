import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './Components/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Provider store = {createStore(reducer)}>
    <App /> 
</Provider>, 
document.getElementById('root'));
registerServiceWorker();


// The general flow of steps will be to create your store, 
// create your reducers, create your containers, and then
// create the action creators.