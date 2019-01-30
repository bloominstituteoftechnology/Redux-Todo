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
    this.props.addToDo('test')
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
  console.log('State: ',state)
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addToDo })(ToDoForm);
