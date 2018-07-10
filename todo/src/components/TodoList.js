import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

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
        const { input } = this.state;
        const newItem = {
            input,
            completed: false,
            id: this.props.todos ? this.props.todos.length + input : 0 + input,
        };
        this.props.addTodo(newItem);
        this.setState({input: ''});
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInput} name="input" />
                    <button type="submit" onClick={this.handleAdd}>Add</button>
                </form>
                <ul>
                    {this.props.todos.map(todo => {
                        return (
                            <li key={todo.id}>{todo.input}</li>
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

export default connect(mapStateToProps, { addTodo })(TodoList);