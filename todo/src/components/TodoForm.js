import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
 
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleClick = ev => {
    ev.preventDefault();
    console.log('Handling Click');
    this.props.addTodo(this.state.inputText);
  }


  render() {
    return (
      <div className='todo-form'>
          <input
            type='text'
            name='inputText'
            onChange={this.handleChanges}
            placeholder='New Todo'
            value={this.state.inputText}
          />
          <input onClick={this.handleClick} type="button" value="Add Todo" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    completed: false
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);