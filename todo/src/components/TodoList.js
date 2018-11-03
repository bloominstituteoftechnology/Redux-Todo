import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodos, toggleTodo } from '../actions'

import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
    width: 45%;
    background-color: lightcoral;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
`;

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    };

    inputHandler = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    toggleHandler = todoId => {
        this.props.toggleTodo(todoId);
    }

    removeHandler = () => {
        this.props.removeTodos();
    }

    addHandler = (event) => {
        event.preventDefault();

        const { text } = this.state;
        
        const newTodo = {
            text,
            completed: false,
            id: this.props.todos.length + 1
        }
        
        this.props.addTodo(newTodo);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <Title>Colin's Todo List</Title>
                <form>
                    <input
                        name="text"
                        value={this.state.text}
                        onChange={this.inputHandler}
                    />
                    <ButtonContainer>
                        <Button 
                            type="button"
                            onClick={this.addHandler}
                        >
                            Add
                        </Button>
                        <Button onClick={() => this.removeHandler()}>Clear</Button>
                    </ButtonContainer>
                </form>
                <ul>
                    {this.props.todos.map( todo => {
                        return (
                            <li
                                onClick={() => this.toggleHandler(todo.id)}
                                key={todo.id}
                                style={
                                    todo.completed ?
                                    { textDecoration: "line-through"} :
                                    null
                                }
                            >
                                {todo.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {
    addTodo,
    removeTodos,
    toggleTodo
})(TodoList);