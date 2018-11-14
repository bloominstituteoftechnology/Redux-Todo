import React, { Component } from 'react';
import{connect} from 'react-redux';
import ToDos from './components/ToDos.js';
import NewTodoForm from './components/NewTodoForm.js';
import './App.css';
import {addtodo, changecompleted} from './actions/index.js';

class App extends Component {
  render(props) {
    return (

      <div className="App">
<ToDos/>
<NewTodoForm/>

       
       )}
      </div>
    );
  }
}

export default App;
//pass actions into this as well once created