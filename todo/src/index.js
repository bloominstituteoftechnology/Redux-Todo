//The src index js file is responsible for wrapping { Provider } around App. 
//it is also responsible for creating the storage unit that all of our components will use to pull and insert data in to manipulate and evolve our state. 

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { taskReducer } from './reducers/index';
import './index.css';
import ToDoList from './containers/ToDoList';


const store = createStore(taskReducer);
/*this will take in our reducer(s) and create our warehouse/storage object. If you have ore than one reducer, you will need to combine reducers */
//we pass our store to pour wrapper - which then makes it available to our components via the connect method.
ReactDOM.render(
    <Provider store={store}> 
      <ToDoList />
    </Provider>,
    document.getElementById('root')
);
