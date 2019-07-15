import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import Todo from './components/Todo'

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
     <Todo />
    </div>
  );
}

export default App;


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));