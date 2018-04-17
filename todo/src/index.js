import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List  from './components/container'
import reducer from './reducers/reducers';


ReactDOM.render(
	<Provider store={createStore(reducer)}>
	<List />
	</Provider>,
	document.getElementById('root')
);
