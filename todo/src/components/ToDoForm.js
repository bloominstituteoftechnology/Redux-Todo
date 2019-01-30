import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log('INPUT: ', this.state.input)
    this.props.addToDo(this.state.input)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return(
      <form>
        <input type='text'
               name='input'
               placehoder='Add To Do Item'
               value={this.state.input}
               onChange={this.handleChange}
               />

        <button onClick={this.handleClick}>Add Item</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addToDo })(ToDoForm);
