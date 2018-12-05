import React from 'react'
import './App.css';
import ToDoList from './components/ToDoList'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }


  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    )
  }

}

export default App;
