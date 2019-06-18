import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: "",
      done: false
    };
  }

  addTodo = event => {
    event.preventDefault();
    if(this.state.value.length > 0) {
      this.props.addTodo({id: this.newTodoID(), value: this.state.value, done: this.state.done });
      this.setState({ value: "" });
    }
  };

  toggleTodoStatus = id => {
    this.props.toggleTodoStatus(id);
  };

  newTodoID = () => {
    return Math.max(...this.props.todoProps.map(todo=> todo.id), 0) + 1;
  }


  onInputChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        {/* onClick={() => this.toggleTodoStatus(this.state.id) */}
        <form onSubmit={this.addTodo}>
            <input
              type="text"
              name="value"
              placeholder="Add a task!"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          <button type="submit" onClick={() => this.newTodoID()}>Add</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({ todoProps: state.todos });

export default connect(mapStateToProps, { addTodo })(TodoForm);