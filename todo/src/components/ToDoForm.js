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
    const index = this.props.todos.length-1;
    let id;

    if(!this.props.todos[index]) {
      id = 0;
    } else {
      id = this.props.todos[index].id+1
    }

    this.props.addToDo(this.state.input, id)
    this.setState({ input: '' });
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
