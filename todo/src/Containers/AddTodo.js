import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
        <form style={{padding: '0 5px'}} onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Something todo..."
            label="Add Todo"
            fullWidth/>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
