// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import todoReducer from './reducers';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Styles
import './index.css';

const defaultState = {
	todoList: [
		{
			value: 'Take out the trash',
			completed: false
		},
		{
			value: 'Wash the dishes',
			completed: false
		},
		{
			value: 'Do the laundry',
			completed: false
		}
	],
	inputText: ''
};

// if you have a todoState saved in your localStorage, parse it into an object and
// set persistedState equal to it, else persistedState will be defaultState
const persistedState = localStorage.getItem('todoState') ? JSON.parse(localStorage.getItem('todoState')) : defaultState;

// add persistedState along with the reducer to the arguments when you create the store
const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
	// Check browser support for localStorage
	if (typeof(Storage) !== 'undefined') {
		// save the state in localStorage
		localStorage.setItem('todoState', JSON.stringify(store.getState()));
	}
});

ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>, document.getElementById('root')
);
registerServiceWorker();
