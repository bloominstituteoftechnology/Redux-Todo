import React, { Component } from 'react';
import { connect } from 'react-redux';
  
class TodoListDeatil extends Component {
    render() {
        if (this.props.todo === null) return null;
        return (
            <div>
                <h2>{this.props.todo.id}</h2>
                <h2>{this.props.todo.value}</h2>
                <h2>{this.props.todo.completed}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.selectedTodo
    };
};


export default connect(mapStateToProps)(TodoListDeatil);