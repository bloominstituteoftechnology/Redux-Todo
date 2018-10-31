import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let nextTodoId = 0;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    const { text } = this.state;
    const newTodo = {
      text,
      completed: false,
      id: nextTodoId++
    };
    console.log(newTodo)
    this.props.addTodo(newTodo);
    this.setState({
      text: ''
    });
  };


  render() {
    const { todos } = this.props;
    return (
        <form className='TodoForm'>
          <input
            onChange={this.handleTodoInput}
            type='text'
            name='text'
            placeholder='next up...'
            value={this.state.text}
          />
          <button type="button" onClick={this.addTodoHandler}>
            Add
          </button>
        </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: 'Kat'
  };
};


export default connect(mapStateToProps, {
addTodo,
})(TodoForm);