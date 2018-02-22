import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodoItem } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputValue: ''
        }
        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.formInputUpdate = this.formInputUpdate.bind(this);
    }
    
    addNewTodoItem(event) {
        event.preventDefault();
        this.props.addNewTodoItem({
            value: this.state.formInputValue,
            completed: false
        });
        this.setState({
            formInputValue: ''
        });
    }
    
    formInputUpdate(event) {
        this.setState({
            formInputValue: event.target.value
        })
    }
    
    render() {
        return (
        <div>
            <form onSubmit={this.addNewTodoItem}>
                <input
                onChange={this.formInputUpdate}
                placeholder='new todo item'
                value={this.state.formInputValue}
                />
                <button type="submit">Add new todo item</button>
            </form>
        </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addNewTodoItem })(TodoForm);