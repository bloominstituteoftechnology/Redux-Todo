import React, { Component } from "react"
import './component.css';
import { connect } from 'react-redux';
import { addTodoList } from '../Actions'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    changeInputValue = e => {
        this.setState({ inputValue: e.target.value });
    }

    createList = e => {
        e.preventDefault();
        this.props.addTodoList(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <div>
                <div className='todo-list'>
                    {this.props.todos.map((i, index) => (
                        <div key={index}>{i.name}</div>
                    ))}
                </div>
                <form onSubmit={this.createList}>
                    <input className="input" type="text"
                        value={this.state.inputValue}
                        placeholder="Add Task"
                        onChange={this.changeInputValue} />
                    <button type="submit" >Add todoList</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodoList: addTodoList })(TodoList);