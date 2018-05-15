//The src index js file is responsible for wrapping { Provider } around App. 
//it is also responsible for creating the storage unit that all of our components will use to pull and insert data in to manipulate and evolve our state. 


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';


import './index.css';
import App from './App';

const store = createStore(toDoer); /*this will take in our reducer(s) and create our warehouse/storage object. If you have ore than one reducer, you will need to combine reducers */

ReactDOM.render(
<Provider store = {store}> {/*see here? store = {store} uses variable from above*/}
        <App />
    </Provider>
    , document.getElementById('root'));

