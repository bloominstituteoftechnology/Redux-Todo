import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, removeCompleted } from '../actions';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
        };
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleAdd = event => {
        event.preventDefault();
        if(!this.state.input) {
            return;
        }
        const { input } = this.state;
        const newItem = {
            input,
            completed: false,
            id: this.props.todos ? this.props.todos.length + input : 0 + input,
        };
        this.props.addTodo(newItem);
        this.setState({input: ''});
    }

    handleCompleted = id => {
        this.props.toggleCompleted(id);
    }

    removeCompleted = () => {
        this.props.removeCompleted();
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInput} name="input" value={this.state.input} />
                    <button type="submit" onClick={this.handleAdd}>Add</button>
                    <button type="button" onClick={this.removeCompleted}>Clear Completed</button>
                </form>
                <ul>
                    {this.props.todos.map(todo => {
                        return (
                            <li key={todo.id} onClick={() => this.handleCompleted(todo.id)} style={todo.completed ? { textDecoration: 'line-through' } : null }>{todo.input}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted, removeCompleted })(TodoList);