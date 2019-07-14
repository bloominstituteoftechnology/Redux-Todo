import React from "react";
import { connect } from "react-redux";

import { addTask, toggleDone } from "../actions";

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
            <React.Fragment>
            <div className = "todo-list">
                {this.props.tasks.map((task, index)=> (
                    <h4 onClick={e => this.toggleDone(e, index)} key={index}>
                        {task.name}
                        {task.done && <i className="fas fa-dragon" />}
                    </h4>
                ))}
            </div>
            <input 
                type="text"
                value={this.state.newTodo}
                placeholder="theres more things to do"
                onChange={this.handleChanges}
            />
            <button onClick={this.addTask}>add task</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        task: state.task
    };
};

export default connect(
    mapStateToProps,
    { addTask, toggleDone }
)(ToDoList);