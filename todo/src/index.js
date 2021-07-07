import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducers from './reducers/'


// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

// const persistedState = localStorage.getItem('reduxState')
//     if(persistedState)  {
//         JSON.parse(localStorage.getItem('reduxState'))
//     } else{ 
//         return  {}
//     }

  
    

const store = createStore (
    reducers,
   
    )

//     store.subscribe(()=>{
//         localStorage.setItem('reduxState', JSON.stringify(store.getState()))
//       })
        


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));


