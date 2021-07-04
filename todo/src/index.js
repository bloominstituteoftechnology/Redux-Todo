import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoReducer from './reducers/todos';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';


import App from './App';
import { addTodo } from './actions';

const rootReducer = combineReducers({
    todo: todoReducer    
});

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addTodo());


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
