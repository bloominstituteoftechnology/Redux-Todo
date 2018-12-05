import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todo from './reducers';
import { loadState, saveData } from './components/loadData';

const persistData = loadState();

const store = createStore(
    todo, 
    // persistData
    );

// store.subscribe(() => {
//     saveData({
//         todo: store.getState(),
//     });
// });

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
