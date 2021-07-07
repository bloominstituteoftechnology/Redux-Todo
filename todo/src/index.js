import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <div className="TodoList">
        <Provider store={store}>
            <App />
        </Provider>
    </div>, 
document.getElementById('root'));
