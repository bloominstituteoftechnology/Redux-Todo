import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo";
import {add, deletes} from "./Actions";
import ToDoList from "./ToDoList";
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  changeHandler = event => {
    console.log(event.target.value )
    this.setState({
      [event.target.name]: event.target.value 
    });
  };

  submitHandler = (event,dispatch) => {
    event.preventDefault();
    dispatch(this.props.add(this.state.inputText))
    // this.props.add(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  deleteHandler = (event,index) => {
    this.props.deletes(Number(index))
  }


  render() {
    return (
      <div className="App">
        < ToDo change={this.changeHandler} submit={this.submitHandler} val={this.state.inputText}/>
        {/* < ToDoList items={this.props.items} delete={this.deleteHandler}/> */}
        < ToDoList />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
      items: state.items
  };
};

export default connect(mapStateToProps, { add})(App);
