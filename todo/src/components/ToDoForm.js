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

    const id = this.generateID();

    this.props.addToDo(this.state.input, id)
    this.setState({ input: '' });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  generateID = () => {
    const index = this.props.todos.length-1;

    return !this.props.todos[index] ? 0 : this.props.todos[index].id+1
  }

  render() {
    return(
      <div className='form-container'>
        <form className='form-container__form'>
          <input type='text'
                 name='input'
                 placehoder='Add To Do Item'
                 value={this.state.input}
                 onChange={this.handleChange}
                 />

          <button onClick={this.handleClick}>Add Item</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addToDo })(ToDoForm);
