import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDo } from '../actions';

class ToDoForm extends Component {
  state = {
    newToDo: '',
  }

  formHandler = (event) => {
    // event.preventDefault();
    this.setState({ newToDo: event.target.value });
    console.log(this.state.newToDo);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.newToDo);
    this.setState({ newToDo : '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.formHandler} value={this.state.newToDo}/>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addToDo: addToDo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addToDo: addToDo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);