import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo({
            value: this.state.newTodo,
            complete: false
        });
        this.setState({
            newTodo: ''
        });
    };
    
    updateNewTodo = (e) => {
        this.setState({
            newTodo: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.addTodo}>
                    <input onChange={this.updateNewTodo} placeholder="new todo" value={this.state.newTodo} />
                </form>
                <TodoList todos={this.props.todos} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(App);