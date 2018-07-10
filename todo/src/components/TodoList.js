import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {completedTodo} from './../actions/index';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>{console.log(this.props.todoList)}
        
             {this.props.todoList.map(item => {
          return <div key={item} item={item.value}><Todo item={item.value} completedTodo={this.props.completedTodo}/></div>
        })}
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
}

export default connect(mapStateToProps, {completedTodo})(TodoList);