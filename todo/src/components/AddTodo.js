import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
  state = {
    newTodo: '',
  };
  
  addTodo = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false,
    });
    this.setState({
      newTodo: '',
    });
  }

  updateTodo = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateTodo}
            placeholder='New Todo Item'
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
