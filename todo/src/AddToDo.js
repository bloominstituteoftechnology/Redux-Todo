import React, { Component } from "react";
import { connect } from "react-redux";
import { createTODO } from "./actions";

class AddAnimals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDoName: ""
        };
    }

    handleToDoNameChange = e => {
        this.setState({ todoName: e.target.value });
    };

    addAnimal = () => {
        this.props.createToDo(this.state.todoName); // this will be our action
        this.setState({ todoName: "" });
    };

    render() {
        return (
            <div>
                <input
                    placeholder="ToDp Name"
                    type="text"
                    value={this.state.todoName}
                    onChange={this.handleNameChToDoange}
                />
                <button onClick={this.addToDo}>Add ToDo</button>
            </div>
        );
    }
}

export default connect(null, { createToDo })(AddToDoListco);

