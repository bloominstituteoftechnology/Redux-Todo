import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  reducer  from './reducers/reducer';
// import './index.css';
import App from './App';

// function reducer(){
//     return {
//         todoList: [
//             { task: 'Learn Redux',
//              id: 0, completed: false }
//           ],
//           title: 'Welcome to Jamar\'s redux app'
//     }
// }


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



