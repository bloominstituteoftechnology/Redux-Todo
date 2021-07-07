import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

import Todo from './todo';

function TodoList(props) {
    return(
        <Fragment>
            <ul>
                {props.todos.map( (todo, i) => <Todo todo={todo} index={i} toggleComplete={props.toggleComplete} key={i} /> )}
            </ul>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
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
