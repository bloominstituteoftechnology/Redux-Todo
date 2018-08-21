import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TodoList.css';

class TodoList extends Component {
    state = {
        todo: '',
        todos: []
    };

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault()
        const todos = [...this.state.todos, this.state.todo] // pull old state when setting state of todos

        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="App">
                <form>
                    <input
                        onChange={this.handleInput}
                        name='todo'
                        value={this.state.todo}
                        placeholder='add task'
                        type='text'
                    />
                    <button>submit</button>
                </form>
                {this.state.todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            {todo}
                        </div>
                    )
                })}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(TodoList);
