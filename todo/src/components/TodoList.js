import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleStrikeAction } from '../actions';
                                    // src/actions/actions.js
class TodoList extends Component {
    // handlers go here
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

   toggleHandler = index => {
      this.props.toggleStrikeAction(index)
   };

    render() {
        return(
            <div>
                {this.props.todos.map((todo, index) => {
                    return (
                        <div
                            key={index}
                            style={ todo.completed ? {textDecoration: 'line-through'} : null }
                        >
                            {todo.text}
                            <button onClick={() => this.toggleHandler(index)}>Complete!</button>
                        </div>

                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, {toggleStrikeAction})(TodoList)