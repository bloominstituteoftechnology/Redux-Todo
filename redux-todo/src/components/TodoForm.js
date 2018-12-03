import React from 'react';
import { addTodoItem } from '../actions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {

  constructor() {

    super();

    this.state = {

      item: ''

    }

  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  submitHandler = e => {

    e.preventDefault();
    this.props.addTodoItem(this.state.item);
    this.setState({item: ''});

  }

  render() {

    return (

      <form onSubmit={this.submitHandler}>

        <input type='text' name='item' value={this.state.item} onChange={this.handleChange} />
        <button>Submit</button>

      </form>

    );

  }

}

export default connect(null, {addTodoItem: addTodoItem})(TodoForm);
