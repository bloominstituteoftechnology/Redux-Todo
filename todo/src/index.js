import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
document.getElementById('root'));
