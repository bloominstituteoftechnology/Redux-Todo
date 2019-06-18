import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      done: false
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ value: "" });
  };

  onInputChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
            <input
              type="text"
              name="value"
              placeholder="Add a task!"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({ todoProps: state.todos });

export default connect(mapStateToProps, { addTodo })(TodoForm);