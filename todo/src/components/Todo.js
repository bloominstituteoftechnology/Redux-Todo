import React from "react";
import { connect } from "react-redux";

class ToDoList extends React.Component {
    state = {
        newTodo: ""
    };
    handleChanges = e => {
        this.setState({ newTodo: e.target.value});
    };
    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.addTask);
    };
    toggleDone = (e, index) => {
        this.props.toggleDone(index);
    };
    render(){
        return (
            <div className = "todo-list">
                {this.props.task.map((task, index)=> (
                    <h4 onClick={e => this.toggleDone(e, index)} key={index}>

                    </h4>
                ))}
            </div>
        )
    }
}
