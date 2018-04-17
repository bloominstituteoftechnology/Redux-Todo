import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addToDo, hideToDo} from './action';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      newToDo: {
        value: '',
        completed: false,
      }
    };


  }

handleOnChange = (e) => {
    this.setState({newToDo : { value: e.target.value }});

}




  render() {
    return (
      <div className="App">
        <input type='text' onChange={this.handleOnChange} value={this.state.newToDo.value}>

        </input>
      <ul>
        {this.props.todoList.map(el => <li>{el.value}</li>)}

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
// {
//   value: 'Walk the dog.',
//   completed: false
// }

export default connect(mapStateToProps, {addToDo, hideToDo})(App);
