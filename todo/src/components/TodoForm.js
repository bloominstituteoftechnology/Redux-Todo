import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

const Form = styled.form`
    align-self: center;
    border-radius: 5px;
    border: solid 1px black;
    height: 30px;
    display: flex;
    overflow: hidden;
    padding: 10px;
    width: 30vw;
    button {
        align-items: center;
        background: limegreen;
        border: none;
        color: white;
        content: '+';
        display: flex;
        font-size: 3rem;
        justify-content: center;
        margin: -10px -10px -10px 0;
        width: 10%;
        padding: 0;
    }
    input {
        font-size: 1.5rem;
        border: none;
        flex-grow: 1;
    }
`;
class TodoForm extends Component {
    constructor(props) {
        super();
        this.state = { input: '' };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask({ text: this.state.input, id: shortid.generate() });
        this.setState({
            input: ''
        });
    };

    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        return (
            <Form onSubmit={event => this.handleSubmit(event)}>
                <input
                    value={this.state.input}
                    placeholder="Add new task..."
                    name="input"
                    onChange={event => this.handleChange(event)}
                />
                <button type="submit">+</button>
            </Form>
        );
    }
}

export default TodoForm;
