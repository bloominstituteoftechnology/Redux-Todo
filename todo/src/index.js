import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import TodoList from './components/TodoList';

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))