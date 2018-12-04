import React from "react";
import { addToDo, toggleCompleted } from "../actions";
import { connect } from "react-redux";

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleAddItem = event => {
        event.preventDefault();
        this.props.addToDo(this.state.todo);
        this.setState({
            todo: ""
        });
    };

    toggleCompleted = index => {
        this.props.toggleCompleted(index);
    };

    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => (
                    <div className="todo-item">
                        <h1
                            onClick={() => this.toggleCompleted(index)}
                            className={`${todo.completed}`}
                            key={index}
                        >
                            {todo.value}
                        </h1>
                    </div>
                ))}
                <form onSubmit={this.handleAddItem}>
                    <input
                        type="text"
                        name="todo"
                        onChange={this.handleChanges}
                        placeholder="New Item"
                        value={this.state.todo}
                    />
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addToDo, toggleCompleted }
)(Todo);
