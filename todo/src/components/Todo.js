import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
    width: 100%;
    border: solid 1px black;
    list-style: none;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    overflow: hidden;
`
const Button = styled.button`
    border: none;
    background-color: red;
    color: white;
    padding: 5px;
    margin: -10px -10px -10px 0;
    width: 10%;
    margin-left: auto;
    font-size: 25px;
    font-weight: bold;
`

const Checkbox = styled.input`
    opacity: 0;
    &:checked + label > span:before {
        content: '✓';
        display: flex;
        width: 100%;
        color: white;
        font-size: 25px;
        line-height: 1em;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 0 0.0714em rgb(115,153,77);
        font-weight: bold;
    }
`

const Label = styled.label`
    margin: -10px 0px -10px -2em;
    display: flex;
    align-items: center;
    line-height: 1.5rem;
    width: 90%;
`

const Checkmark = styled.span`
    display: flex;
    width: 12%;
    height: 100%;
    vertical-align: bottom;
    background: limegreen;
    margin-right: 15px;
`

class Todo extends Component {

    markComplete(event) {
        console.log(event.target.id)
        this.props.toggleTask(event.target.id)
    }

    deleteTask(event) {
        console.log(event.target.id)
        this.props.removeTask(event.target.id)
    }

    render() {
        return (
            <Li><Checkbox
                checked={this.props.complete}
                name="taskCheck"
                type="checkbox"
                onChange={(event) => this.markComplete(event)}
                id={this.props.id} />
                <Label for={this.props.id}><Checkmark><span></span></Checkmark>{this.props.text}</Label>
                {/* {this.props.text} */}
                <Button id={this.props.id} name="remove" onClick={(event) => this.deleteTask(event)}>X</Button>
            </Li>
        )
    }
};

export default Todo;