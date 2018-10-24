import React from 'react';
import { connect } from 'react-redux';
import { addtolist } from './actions';

import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    }
  }

  addTodo = event => {
    event.preventDefault();
    this.props.addtolist(this.state.newItem)
    this.setState({
      newItem: ''
    })
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Things TODO:</h1>
        <TodoList />
        <TodoItem
          addTodo={this.addTodo}
          changeHandler={this.changeHandler}
          newItem={this.state.newItem}
        />
      </div>
    );
  }
}

export default connect(null, { addtolist })(App);
