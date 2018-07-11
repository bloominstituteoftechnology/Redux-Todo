import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions'
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {this.props.todos.map((todo, index) => {
                   return <TodoItem todo={todo} toggledCompleted={this.props.toggleCompleted} onClick={this.props.toggleCompleted(index)} id={index} key={index}/>
                })}
                </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};


export default connect(mapStateToProps, {toggleCompleted} )(TodoList);