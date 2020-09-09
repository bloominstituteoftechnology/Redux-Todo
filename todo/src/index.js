import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import reducer from './reducers';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(()=> {
	saveState(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);
