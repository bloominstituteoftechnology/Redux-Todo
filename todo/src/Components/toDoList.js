import React, { Component } from  'react';
import { connect } from 'react-redux';

import Todo from './todo';
import { addTodo } from '../actions';


class TodoList extends Component {
    state = {
        Input: '',
    }

    handleInput = (event) => {
        const input = event.target.value;
        this.setState({
            Input: input,
        })
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.Input);
        // reset the Input state
        this.setState({
            Input: '',
        });
    }

    render() {
        return (
            <div className="Todos">
                {this.props.Todos.map((todo, index) => <Todo key={index} todo={todo} index={index}/>)}
                <div className="Todos__Input">
                    <input onChange={this.handleInput} value={this.state.Input} type="text" placeholder="add to do item"  />
                </div>
                <button onClick={this.handleSubmit}>Add item</button>
            </div>
        );
    }
};

const mapStatesToProps = (state) => {
    return { 
        Todos: state,
    };
};

export default connect(mapStatesToProps, {addTodo})(TodoList);