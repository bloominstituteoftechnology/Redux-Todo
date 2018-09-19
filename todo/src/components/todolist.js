import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

import Todo from './todo';

class TodoList extends Component {
    // componentDidMount() {
    //     null;
    // }

    render() {
        return(
            <Fragment>
                <ul>
                    {this.props.todos.map( (todo, i) => <Todo todo={todo} index={i} toggleComplete={this.props.toggleComplete} key={i} /> )}
                </ul>
                {console.log('todolist.js this.props.todos', this.props.todos)}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state);
    return {
        todos: state.todos
    };
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        completed: PropTypes.bool
    })).isRequired,
    toggleComplete: PropTypes.func
};

export default connect(mapStateToProps, { toggleComplete })(TodoList);
