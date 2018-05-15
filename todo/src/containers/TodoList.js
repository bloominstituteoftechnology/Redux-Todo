import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions'

class TodoList extends  Component {

    renderAddTodo() {
        return this.props.todos.map((todo, i) => {
            return (
                <li
                    onSubmit={() => this.props.addTodo(todo)}
                    key={i}
                    >
                </li>
            );
         }); 
    }
    render(){
        return(
            <ul>
                {this.renderAddTodo()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        todo: state.todo
    };
};

const mapDipatchToProps = (state) => {
    return bindActionCreators({addTodo: addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDipatchToProps)(addTodo)