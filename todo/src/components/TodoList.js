import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>{todos.map(todo =><Todo key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)} />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

/*
import {addTodo} from '../actions';
import React, {component} from 'react';
import { connect } from 'react-redux'
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue:""
        };
        this.addTodo = this.addTodo.bind(this);
        this.updateNewTodo = this.updateNewTodo.bind(this);
    }
    
    addTodo(event) {
        event.preventDefault();
        this.props.addTodo({
            value: this.state.todoValue,
            completed: false
        })
    }
    updateNewTodo(event) {
        this.setState({
        todoValue: event.target.value
         })   
    }

    render() {
        return (
            <div className="TodoForm">
                <form onSubmit={this.addTodo}>
                    <input
                        onChange={this.updateNewTodo}
                        placeholder="new todo"
                        value={this.state.newTodo}
                    />
                </form>
            </div>
        );
    }
}

mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}