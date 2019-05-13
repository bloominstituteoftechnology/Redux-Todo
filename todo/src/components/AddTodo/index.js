import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';

class AddTodo extends React.Component {
  state = {
    newTodo: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What do you need to do today?"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodo);
