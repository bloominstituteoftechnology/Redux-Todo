import React from 'react';
import { addTodo, toggleTodoStatus, deleteTodo } from '../actions';
import { connect } from 'react-redux';
import TodoList from './TodoList';

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
      this.props.addTodo({id: this.newTodoId(), value: this.state.value, done: this.state.done });
      this.setState({ value: "" });
    }
  };

  deleteATodo = id => {
    this.props.deleteTodo(id);
  }

  newTodoId = () => {
    return Math.max(...this.props.todoProps.map(todo=> todo.id), 0) + 1;
  }
  
  toggleTodo = id => {
    this.props.toggleTodoStatus(id);
  }

  onInputChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="form-container">
        <form className="md-form" onSubmit={this.addTodo}>
            <input
              type="text"
              name="value"
              value={this.state.value}
              onChange={this.onInputChange}
              id="exampleForm2"
              className="form-control white-text"
              autoComplete="off"
            />
          <button className="btn peach-gradient"type="submit" onClick={() => this.newTodoId()}>Add</button>
        </form>
        <TodoList toggle={this.toggleTodo} delete={this.deleteATodo}/>
      </div>
    );
  };
}

const mapStateToProps = state => ({ todoProps: state.todos });

export default connect(mapStateToProps, { addTodo, toggleTodoStatus, deleteTodo })(TodoForm);