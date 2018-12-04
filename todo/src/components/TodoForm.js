import React from 'react';
import { connect } from 'react-redux';
import { addTodos, toggleComplete } from '../actions/';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTodoItem = event => {
        event.preventDefault();
        this.props.addTodos(this.state.inputText)

    }

    toggleCompleted = index => {
        this.props.toggleComplete(index)
    }

    render () {
        return (
            <div>
                {this.props.items.map((item, index) => 
                <h2 onClick={()=> this.toggleCompleted(index)}key={index}>{item.value}</h2>)}
                <input
                    name='inputText'
                    onChange={this.handleChange}
                    onSubmit={this.addTodoItem}
                    placeholder='Add Todo'
                    type='text'
                    value={this.state.inputText}
                />
                <button onClick={this.addTodoItem}>Add Item</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.todos
    };
}

export default connect(mapStateToProps, {addTodos, toggleComplete})(TodoForm)