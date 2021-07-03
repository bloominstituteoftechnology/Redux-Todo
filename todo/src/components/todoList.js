import React, { Component } from 'react';
import { connect } from 'react-redux';

import  Todo  from './todo';
import { addTodo } from '../actions';
import './todoList.css';

class TodoList extends Component {
    state = {
        Input: '',
    }
  
    handleInput = (event) => {
        const input = event.target.value
        this.setState({
            Input: input,
        });
    }

    handleSummit = () => {
        // event.preventDefault(); //uncommit when add item is in a form 
        this.props.addTodo(this.state.Input);
        //reset the Input state
        this.setState({
            Input: '',
        });
    }

    render() {
        // console.log(this.props)
        return (
            <div className="Todos">
                    {this.props.Todos.map((todo, index) => <Todo key={index} todo={todo} />)}
                <div className="Todos__Input">
                    <input onChange={this.handleInput} value={this.state.Input} placeholder="Add Your New Todo!" type="text"/>
                </div>
                <button onClick={this.handleSummit}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Todos: state
    };
}

export default connect(mapStateToProps,{ addTodo })(TodoList);
