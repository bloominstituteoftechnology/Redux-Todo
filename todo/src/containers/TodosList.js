import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectTodo } from '../actions';
//import { bindActionCreators } from 'redux';



class TodosList extends Component {

    renderTodos() {
        return this.props.todos.map((todo, i) => {
            return (
                <li 
                    key={i}
                    onClick={() => this.props.selectTodo(todo)}
                
                >
                    {todo.value}
                </li>
            );
        });
    }

    render () {
        return (
            <ul>
                {this.renderTodos()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

    // const mapDispatchToProps = (dispatch) => {
        
    // }


export default connect(mapStateToProps)(TodosList);