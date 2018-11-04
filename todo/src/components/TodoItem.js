import React from 'react';
import { connect } from "react-redux";
import { toggleCompletedAction } from "../actions";

class TodoItem extends React.Component {

    toggleCompleted = e => {
        e.preventDefault();
        this.props.toggleCompletedAction(this.props.index);
    }

    render() {
        return (
            <div className={this.props.todo.completed ? 'todo-item done' : 'todo-item'}
                onClick={this.toggleCompleted}>
                {this.props.todo.value}
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {};
};
  
export default connect(mapStateToProps, { toggleCompletedAction })(TodoItem);