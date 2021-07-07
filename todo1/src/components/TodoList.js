import React from 'react';
import { addTodo, toggleTodo} from '../actions';
import { connect } from 'react-redux';

class TodoListContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        todoInput: ''
      };
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
        this.setState({
            todoInput: ''
        })
      };
    
    handletoggleTodo = index => {
        this.props.toggleTodo(index);
    };

    render() {
        return (
          <div>

            {this.props.todos.map((todo, index) => (
              <h4 onClick={() => this.handletoggleTodo(index)} key={todo.todoInput}>
                {todo.todoInput}
              </h4>
            ))}
    
            <input
              type="text"
              name="todoInput"
              onChange={this.handleChanges}
              placeholder="New Todo"
              value={this.state.todoInput}
              autoComplete="off"
            />
            <button onClick={this.handleAddTodo}>Add Todo</button>
          </div>
        );
      }

}

function mapStateToProps(state) {
    return {
      title: state.title,
      todos: state.todos
    };
  }
  
  
  const withState = connect(
    mapStateToProps,
    {
      addTodo, 
      toggleTodo
    }
  );
  
  const TodoList = withState(TodoListContainer);
  
  export default TodoList;