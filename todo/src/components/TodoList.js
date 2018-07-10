import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { toggleCompleted } from '../actions'
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {this.props.todos.map((todo, index) => {
                   return <TodoItem todo={todo} onClick={this.toggleCompleted} id={index} key={index}/>
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


export default connect(mapStateToProps)(TodoList);
// export default connect(mapStateToProps, {toggleCompleted} )(TodoList);