import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import {addToDo, hideToDo} from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      newToDo: {
        value: '',
        completed: false,
      }
    };
  }

  handleOnChange = (e) => {
    this.setState({newToDo : { value: e.target.value,
      completed: false,
     }});
  }

  handleSubmit= (props) => {
    this.props.addToDo(this.state.newToDo)
  }

  handleToggleComplete = (todo) => {
    this.props.hideToDo(todo)
  }

  render() {
    return (
      <div className="App">
          <input type='text' onChange={this.handleOnChange} value={this.state.newToDo.value}>           
          </input>
          <button onClick={this.handleSubmit}>Add To Do</button>
        <ul>
          {this.props.todoList.filter(todo => !todo.completed ).
            map(todo => <div><li>{todo.value}</li><button onClick={() => this.handleToggleComplete(todo)}></button></div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state
  };
};
//{
 // value: 'Walk the dog.',
  //completed: false
//}

export default connect (mapStateToProps, { addToDo, hideToDo  }) (App);

