import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List  from './components/container'
import reducer from './reducers/reducers';


ReactDOM.render(
	<Provider store={createStore(reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)}>
	<List />
	</Provider>,
	document.getElementById('root')
);
