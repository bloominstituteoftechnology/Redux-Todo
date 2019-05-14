import React, { Component } from "react"
import './component.css';

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
        this.setState({
            inputValue: ""
        })

        this.props.newTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>

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

export default TodoList;